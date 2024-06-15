import Paper from "@mui/material/Paper";
import { lighten, useTheme } from "@mui/material/styles";

import { useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "src/app/store/updateFlagSlice";

import FuseCountdown from "@fuse/core/FuseCountdown";

import axios from "axios";
import {
  getContract,
  getEtherSigner,
  fromBigNum,
  toBigNum,
} from "src/app/services/web3.service";
import Alert from "@mui/material/Alert";
import { useAccount } from "wagmi";
import { showMessage } from "app/store/fuse/messageSlice";
import {
  formatNumberWithCommas,
  convertSecondsToDate,
} from "src/app/services/utils.service.js";
import PresaleData from "src/abis/Presale.json";
import USDCData from "src/abis/Usdc.json";
import USDTData from "src/abis/Usdt.json";
import { ethers } from 'ethers';
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';


const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function PresaleWidget(props) {
  const theme = useTheme();
  const query = useQuery();

  const updateFlag = useSelector((state) => state.updateFlag.value);
  const dispatch = useDispatch();

  const ZERO_ADDR = "0x0000000000000000000000000000000000000000";
  const MIN_TOKEN_VALUE = 100000; //10000
  const MAX_TOKEN_VALUE = 12500000;
  const TOTAL_MAX_ALLOCATION = 1500000000;
  const TOKEN_PRICE = 0.0008;
  const STEP = 100000; //10000
  const ethPriceInUsdc = 3680; // ETH price in USDC

  const { address, isConnected } = useAccount();

  const [maxAllocation] = useState(MAX_TOKEN_VALUE);

  const [refCode, setRefCode] = useState("");
  const [referrer, setReferrer] = useState(ZERO_ADDR);

  const [inputTokens, setInputTokens] = useState(1000 / TOKEN_PRICE);
  const [priceForTokens, setPriceForTokens] = useState(
    1000
  );

  const [isOGRound, setIsOGRound] = useState(false);
  const [ogRoundTokenLimited, setOGRoundTokenLimited] = useState(0);
  const [ogRoundEndAt, setOgRoundEndAt] = useState(0);
  const [isOGRoundWhitelisted, setIsOGRoundWhitelisted] = useState(false);

  const [isPublicRound, setIsPublicRound] = useState(true);
  const [publicRoundTokenLimited, setPublicRoundTokenLimited] = useState(0);
  const [publicRoundEndAt, setPublicRoundEndAt] = useState("");

  const [totalTokensRequested, setTotalTokensRequested] = useState(0);
  const [tokenType, setTokenType] = useState(1); // 1 for USDC, 2 for USDT, 3 for ETH
  const [tokenRequested, setTokenRequested] = useState(0);
  const [bonusRequested, setBonusRequested] = useState(0);

  const [loading, setLoading] = useState(false);

  const [isEnded, setIsEnded] = useState(false);

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  useEffect(() => {
    const init = async () => {
      const refCodeParam = query.get("r");
      setRefCode(refCodeParam == null ? "" : refCodeParam);
      console.log("address:", PresaleData.address);
      if (isConnected) {
        if (refCodeParam != null) {
          getReferrerAddr(refCodeParam);
        }
        await fetchChainStatus();
      } else {
        try { await fetchRoundStatus(); }
        catch (error) { console.log(error); }
        console.log("fetch")
      }
    };
    init();
  }, [isConnected, address, updateFlag]);

  const getReferrerAddr = (code) => {
    axios
      .get(process.env.REACT_APP_API_URL + "/address/" + code)
      .then((response) => {
        if (response.data == "") {
          dispatch(
            showMessage({
              message: "Invalid Referral Code!",
              variant: "error",
              anchorOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            })
          );
          return;
        } else {
          if (address === response.data.address) {
            dispatch(
              showMessage({
                message:
                  "Error: You are using your own referral code!\n We will ignore this!",
                variant: "error",
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "right",
                },
              })
            );
          } else {
            setReferrer(response.data.address);
          }
        }
      })
      .catch((error) => {
        dispatch(
          showMessage({
            message: "DB Connection Error!",
            variant: "warning",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          })
        );
      });
  };

  const fetchRoundStatus = async () => {
    // const signer = await getEtherSigner();
    const presaleContract = await getContract(
      PresaleData.address,
      PresaleData.abi
    );

    // getting public round info
    let _isPublicRound = await presaleContract.checkPublicRound();
    setIsPublicRound(_isPublicRound);
    let _totalRowTokensRequested;
    if (_isPublicRound) {

      let _publicRowRoundTokenLimited;
      [_publicRowRoundTokenLimited, _totalRowTokensRequested] = await Promise.all([
        presaleContract.getPublicRoundTokenLimited(),
        presaleContract.totalTokensRequested(),
      ])

      // setPublicRoundEndAt(
      //   convertSecondsToDate(
      //     fromBigNum(_publicRoundStartedAt, 0) +
      //     fromBigNum(_publicRoundDuration - 86400, 0)
      //   )
      // );
      let _publicRoundTokenLimited = fromBigNum(
        _publicRowRoundTokenLimited
      );

      setPublicRoundTokenLimited(_publicRoundTokenLimited);
    }

    let _totalTokensRequested = fromBigNum(
      _totalRowTokensRequested
    );

    setTotalTokensRequested(_totalTokensRequested);

    if (_totalTokensRequested >= TOTAL_MAX_ALLOCATION) {
      setIsEnded(true);
    }
  };

  const fetchChainStatus = async () => {
    // const signer = await getEtherSigner();
    const presaleContract = await getContract(
      PresaleData.address,
      PresaleData.abi
    );

    // getting OGRound info
    let _isOGRound = await presaleContract.checkOGRound();
    setIsOGRound(_isOGRound);
    if (_isOGRound) {
      let _isOGRoundWhiltelisted = await presaleContract.isOGWhitelisted(
        address
      );
      setIsOGRoundWhitelisted(_isOGRoundWhiltelisted);

      // let _ogRoundDuration = await presaleContract.getOGRoundDuration();
      // let _ogRoundStartedAt = await presaleContract.getOGRoundStartedAt();
      // setOgRoundEndAt(
      //   convertSecondsToDate(
      //     fromBigNum(_ogRoundStartedAt, 0) + fromBigNum(_ogRoundDuration + 86400, 0)
      //   )
      // );

      let _ogRoundTokenLimited = fromBigNum(
        await presaleContract.getOGRoundTokenLimited(address)
      );
      setOGRoundTokenLimited(_ogRoundTokenLimited);
    }

    // getting public round info
    let _isPublicRound = await presaleContract.checkPublicRound();
    setIsPublicRound(_isPublicRound);
    if (_isPublicRound) {
      // let _publicRoundStartedAt =
      //   await presaleContract.getPublicRoundStartedAt();
      // let _publicRoundDuration = await presaleContract.getPublicRoundDuration();
      // setPublicRoundEndAt(
      //   convertSecondsToDate(
      //     fromBigNum(_publicRoundStartedAt, 0) +
      //     fromBigNum(_publicRoundDuration - 86400, 0)
      //   )
      // );

      let _publicRoundTokenLimited = fromBigNum(
        await presaleContract.getPublicRoundTokenLimited()
      );
      setPublicRoundTokenLimited(_publicRoundTokenLimited);
    }

    let _tokenRequested = fromBigNum(
      await presaleContract.getTokensRequestedOfWallet(address)
    );
    setTokenRequested(_tokenRequested);

    let _bonusRequested = fromBigNum(
      await presaleContract.getBonusRequested(address)
    );
    setBonusRequested(_bonusRequested);

    let _totalTokensRequested = fromBigNum(
      await presaleContract.totalTokensRequested()
    );
    setTotalTokensRequested(_totalTokensRequested);

    if (_totalTokensRequested >= TOTAL_MAX_ALLOCATION) {
      setIsEnded(true);
    }
  };

  // const incrementValue = () => {
  //   const roundedInputTokens = Math.round(inputTokens / STEP) * STEP;
  //   const increaseValue = Math.min(roundedInputTokens + STEP, MAX_TOKEN_VALUE);
  //   setInputTokens(Math.min(roundedInputTokens + STEP, MAX_TOKEN_VALUE));
  //   setPriceForTokens(
  //     Math.min(calculateUSDC(increaseValue), MAX_TOKEN_VALUE * TOKEN_PRICE)
  //   );
  // };

  // Handler to decrement the value
  // const decrementValue = () => {
  //   const roundedInputTokens = Math.round(inputTokens / STEP) * STEP;
  //   const decreaseValue = Math.max(roundedInputTokens - STEP, MIN_TOKEN_VALUE);
  //   setInputTokens(Math.max(roundedInputTokens - STEP, MIN_TOKEN_VALUE));
  //   setPriceForTokens(
  //     Math.max(calculateUSDC(decreaseValue), MIN_TOKEN_VALUE * TOKEN_PRICE)
  //   );
  // };

  const handleInputTokens = (event) => {
    try {
      let value = event.target.value;
      value = value.replace(/^0+/, '');
      event.target.value = value;
      if (value.includes('.')) event.target.value = "0" + value;
      setInputTokens(Number(value));
      if (value === "") {
        setPriceForTokens(0);
      } else if (tokenType === 3) {
        const usdc = calculateUSDC(Number(value))
        const usdcInSmallestUnit = usdc;
        // toBigNum(usdc, 0);
        const ethAmount = (usdcInSmallestUnit / ethPriceInUsdc).toFixed(9);
        setPriceForTokens(ethAmount);
      } else {
        setPriceForTokens(calculateUSDC(Number(value)));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleInputPrice = (event) => {
    try {
      let value = event.target.value;
      value = value.replace(/^0+/, '');
      event.target.value = value;
      if (value.includes('.')) event.target.value = "0" + value;
      setPriceForTokens(Number(value));
      if (value === "") {
        setInputTokens(0);
      } else if (tokenType === 3) {
        const usdc = ethPriceInUsdc * Number(value);
        setInputTokens(toBigNum(usdc, 18).div(toBigNum(TOKEN_PRICE, 18)))
      } else {
        setInputTokens(toBigNum(value, 6).div(toBigNum(TOKEN_PRICE, 6)))
      }
    } catch (error) {
      console.log(error);
    }
  }

  const selectTokenType = (number) => {
    setTokenType(Number(number));
    if (number === 3) {
      setPriceForTokens(1);
      setInputTokens(4600000);
    } else {
      setPriceForTokens(1000);
      setInputTokens(1250000);
    }
  }

  const handleDepositUSDC = async () => {
    if (!isConnected) {
      return;
    }

    // if (Math.round(inputTokens / STEP) != inputTokens / STEP) {
    //   dispatch(
    //     showMessage({
    //       message: "Error: Token amount should be in increments of 100k!",
    //       variant: "error",
    //       anchorOrigin: {
    //         vertical: "top",
    //         horizontal: "right",
    //       },
    //     })
    //   );
    // setInputTokens(Math.round(inputTokens / STEP) * STEP);
    //   return;
    // }

    if (inputTokens < 1000000) {
      dispatch(
        showMessage({
          message: "Error: Token amount should be more than 100k!",
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
      // setInputTokens(Math.round(inputTokens / STEP) * STEP);
      return;
    }

    const signer = await getEtherSigner();
    const presaleContract = await getContract(
      PresaleData.address,
      PresaleData.abi,
      signer
    );

    let usdc = calculateUSDC(parseInt(inputTokens));

    if (isOGRound) {
      // ogwhiltelist checking
      let isWhitelisted = await presaleContract.ogWhitelist(address);
      if (!isWhitelisted) {
        dispatch(
          showMessage({
            message: "Your are not whitelisted for OG Round",
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          })
        );
        return;
      }

      if (
        parseInt(inputTokens) + parseInt(tokenRequested) >
        ogRoundTokenLimited
      ) {
        dispatch(
          showMessage({
            message: "Error: Pre-sale allocation reached!",
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          })
        );
        return;
      }
    } else if (isPublicRound) {
      if (
        parseInt(inputTokens) + parseInt(tokenRequested) >
        publicRoundTokenLimited
      ) {
        dispatch(
          showMessage({
            message: "Error: Pre-sale allocation reached!",
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          })
        );
        return;
      }
    }

    {/*}
    if (refCode != null && refCode != "") {

      let isUsedRefCode = await presaleContract.isUsedRefCode(address);
      if (isUsedRefCode) {
        dispatch(
          showMessage({
            message: "You can only use a ref code on your first purchase!",
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          })
        );
        return;
      }
    }
    */}

    if (totalTokensRequested >= TOTAL_MAX_ALLOCATION) {
      dispatch(
        showMessage({
          message: "Error: Presale sold out",
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
      return;
    }

    if (totalTokensRequested + parseInt(inputTokens) > TOTAL_MAX_ALLOCATION) {
      dispatch(
        showMessage({
          message: "Error: Presale allocation is almost sold out. Remaining: " + (TOTAL_MAX_ALLOCATION - totalTokensRequested),
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
      return;
    }

    const usdcContract = await getContract(
      // USDCData.address,
      "0x5596693792317Cb0e8FD0DF899a32EB84B881107",
      USDCData.abi,
      signer
    );

    const usdtContract = await getContract(
      // USDTData.address,
      "0x49584DeBFAA21989130df0A5BD5Af4DbB224b354",
      USDTData.abi,
      signer
    );

    setLoading(true);

    try {
      if (tokenType === 1) {
        // Check allowance for USDC
        let allowance = fromBigNum(
          await usdcContract.allowance(address, PresaleData.address),
          6
        );

        if (allowance < usdc) {
          let tx = await usdcContract.approve(
            PresaleData.address,
            toBigNum(usdc, 6)
          );
          await tx.wait();
        }
      } else if (tokenType === 2) {
        // Check allowance for USDT
        let allowance = fromBigNum(
          await usdtContract.allowance(address, PresaleData.address),
          6
        );

        if (allowance < usdc) {
          let tx = await usdtContract.approve(
            PresaleData.address,
            toBigNum(usdc, 6)
          );
          await tx.wait();
        }
      }
    } catch (err) {
      console.log(err);
      dispatch(
        showMessage({
          message: `${tokenType === 1 ? 'USDC' : 'USDT'} Approve Transaction Error`,
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
      setLoading(false);
      return; // Exit the function if there's an approval error
    }

    // Proceed with deposit based on the token type
    try {
      let tx;

      // Convert USDC to smallest unit (6 decimals)
      const usdcInSmallestUnit = toBigNum(usdc, 6);

      // Calculate ETH amount (18 decimals)
      const ethAmount = (usdcInSmallestUnit.mul(ethers.BigNumber.from(10).pow(18))).div(toBigNum(ethPriceInUsdc, 6));


      if (tokenType === 1 || tokenType === 2) {
        // Deposit USDC or USDT
        tx = await presaleContract.deposit(
          toBigNum(usdc, 6),
          referrer,
          refCode,
          tokenType
        );
      } else if (tokenType === 3) {
        // Deposit ETH
        console.log(toBigNum(usdc / 3680, 18));
        console.log(usdc);
        tx = await presaleContract.deposit(
          toBigNum(usdc, 6), // Amount in USDC for token calculation
          referrer,
          refCode,
          tokenType,
          { value: ethAmount }
        );
      }
      await tx.wait();
      dispatch(
        showMessage({
          message: `You deposited ${tokenType === 1 ? 'USDC' : tokenType === 2 ? 'USDT' : 'ETH'} successfully!`,
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
      dispatch(updateStatus());
    } catch (err) {
      console.log(err);
      dispatch(
        showMessage({
          message: `Deposit ${tokenType === 1 ? 'USDC' : tokenType === 2 ? 'USDT' : 'ETH'} Transaction Error`,
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
      setLoading(false);
    }
    setLoading(false);
  };


  const calculateRateOfProgressBar = () => {
    let rate = (((totalTokensRequested) / TOTAL_MAX_ALLOCATION) * 100).toFixed(4);
    return rate;
  };

  const calculateUSDC = (tokens) => {
    return (TOKEN_PRICE * tokens).toFixed(2);
  };

  const switchMoney = (tokenType) => {
    if (tokenType === 1) {
      return "USDC";
    } else if (tokenType === 2) {
      return "USDT";
    } else if (tokenType === 3) {
      return "ETH";
    }
  };


  const switchImage = (tokenType) => {
    if (tokenType === 1) {
      return <img loading="lazy" src="/tokens/usdc.webp" alt="USDC" className="object-contain w-4 h-4" />
    } else if (tokenType === 2) {
      return <img loading="lazy" src="/tokens/usdt.svg" alt="USDT" className="object-contain w-4 h-4" />
    } else if (tokenType === 3) {
      return <img loading="lazy" src="/tokens/eth.svg" alt="ETH" className="object-contain w-4 h-4" />
    }
  };

  return (

    < section className="container mt-2 pt-4" >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <h1 className="uppercase italic text-3xl md:text-[3.34rem] leading-tight">Pioneering the New Era of DeFi 3.0.</h1>
        </div>
        <div className="md:w-1/2 hero-text">
          <p>
            VaultFinance is revolutionizing DeFi (Decentralized Finance), with APY backed by revenue-generating
            businesses.
            <span className="font-semibold text-white">
              &nbsp;VaultFi has undergone 2 security audits, 1 economic audit, and is led by a doxxed team.
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  mt-5 lg:mt-8 gap-7">
        <div className="md:w-1/3 family-poppins">
          {/* Buy token / Connect wallet form  */}
          <div className="rounded-[16px] dark-blue-bg p-8 flex flex-col gap-2 items-center">
            {/* Amount Raised */}
            <div className="amount-raised">
              {/* {`$${formatNumberWithCommas(totalTokensRequested * TOKEN_PRICE)}`} */}
              $547,140
            </div>
            {/* Raise Progress bar */}
            <div className="raise-goal">
              <span>
                {/* {calculateRateOfProgressBar()} */}
                91.19% of minimum goal raised</span>
              <div className="progress">
                <div style={{ width: `91.19%` }}></div>
              </div>
              <span className="text-end">$600,000</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-center text-white">🔥 2631 Visitors in the last 24h</p>
              <p className=" text-center ">Listing price = $0.001</p>
            </div>
            <hr className="border-white/10 w-full"></hr>

            <div className="flex flex-col items-center justify-center gap-2.5 mt-2">
              <p className=" text-center ">1 VaultFi token = $0.0008</p>
            </div>

            {/*  */}

            <div className="flex gap-4 mt-2 w-full">
              <div className="flex flex-col w-full gap-1.5">
                <div className="flex items-center gap-4">
                  <div className="grid grid-cols-3 gap-0.5 w-full rounded-xl overflow-hidden">
                    <button
                      onClick={() => selectTokenType(Number(3))}
                      className={`p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 ${tokenType === 3 ? "bg-[var(--gold)]" : "bg-white/10"}`}>
                      <div className="relative flex">
                        <img loading="lazy" src="/tokens/eth.svg" alt="ETH" className="object-contain w-4 h-4" />
                      </div>
                      ETH
                    </button>
                    <button
                      onClick={() => selectTokenType(Number(2))}
                      className={`p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 ${tokenType === 2 ? "bg-[var(--gold)]" : "bg-white/10"}`}>
                      <div className="relative flex">
                        <img loading="lazy" src="/tokens/usdt.svg" alt="USDT" className="object-contain w-4 h-4" />
                        <img
                          className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-[var(--gold)]"
                          src="/tokens/ethereum.svg"
                        />
                      </div>
                      USDT
                    </button>
                    <button
                      onClick={() => selectTokenType(Number(1))}
                      className={`p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 ${tokenType === 1 ? "bg-[var(--gold)]" : "bg-white/10"}`}>
                      <div className="relative flex">
                        <img loading="lazy" src="/tokens/usdc.webp" alt="USDC" className="object-contain w-4 h-4" />
                        <img
                          className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-[var(--gold)]"
                          src="/tokens/ethereum.svg"
                        />
                      </div>
                      USDC
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}

            < div className="space-y-2 w-full" >
              <div className="space-y-2">
                <label htmlFor="from-token" className="text-[11px] font-semibold uppercase ">
                  Amount in <span className="text-primary">ETH</span> you pay
                </label>
                <div className="relative">
                  <input
                    value={Number(priceForTokens)}
                    onChange={handleInputPrice}
                    type="number"
                    className="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                    {switchImage(tokenType)}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="from-token" className="flex flex-wrap text-[11px] font-semibold uppercase ">
                  VaultFi token amount you receive
                </label>
                <div className="relative">
                  <input
                    value={Number(inputTokens)}
                    onChange={handleInputTokens}
                    type="number"
                    className="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                    <img loading="lazy" src="/tokens/vaultfi.png" alt="HPLT" className="object-contain w-6 h-6" />
                  </div>
                </div>
              </div>
            </div >

            {/*  */}
            < div className="flex flex-col justify-center items-center w-full" >
              <div className="flex w-6 mb-1.5">
                <img loading="lazy" src="/tokens/vaultfi.png" className="h-full" />
              </div>
              <div className="text-center text-xs ">
                In order to buy VaultFi tokens, please confirm the transaction in your wallet. You may need to check
                the wallet app if you're on mobile.
              </div>
            </div >
            {
              !isConnected ?
                <button onClick={openConnectModal} className="flex items-center justify-center w-full mt-2 !px-3 !py-5 font-semibold text-white uppercase rounded-lg btn disabled:opacity-50 disabled:cursor-not-allowed">
                  <span className="">Connect Wallet</span>
                </button> :
                <button
                  className="flex items-center justify-center w-full mt-2 !px-3 !py-5 font-semibold text-white uppercase rounded-lg btn disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleDepositUSDC}
                  disabled={
                    !isConnected ||
                    (!isOGRound && !isPublicRound) ||
                    (isOGRound && !isOGRoundWhitelisted) ||
                    isEnded
                  }
                >
                  {loading ? <span>Pending</span> : <span>Enter</span>}
                </button>
            }
          </div>
        </div>

        <div className="md:w-2/3  h-fit md:hidden scale-[1.15] sm:scale-100 py-20 sm:py-0">
          <img loading="lazy" src="/graph-mobile.jpg" />
        </div>
        <div className="md:w-2/3 hidden rounded-[16px] p-3 dark-blue-bg md:block h-fit">
          <img loading="lazy" src="/graph.jpg" />
        </div>
      </div >
    </section >

  );
};

export default memo(PresaleWidget)
