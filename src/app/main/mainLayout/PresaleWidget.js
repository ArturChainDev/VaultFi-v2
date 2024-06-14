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

  const [inputTokens, setInputTokens] = useState(1000000);
  const [priceForTokens, setPriceForTokens] = useState(
    1000000 * TOKEN_PRICE
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

      let _publicRoundStartedAt, _publicRoundDuration, _publicRowRoundTokenLimited;
      [_publicRoundStartedAt, _publicRoundDuration, _publicRowRoundTokenLimited, _totalRowTokensRequested] = await Promise.all([
        presaleContract.getPublicRoundStartedAt(),
        presaleContract.getPublicRoundDuration(),
        presaleContract.getPublicRoundTokenLimited(),
        presaleContract.totalTokensRequested(),
      ])

      setPublicRoundEndAt(
        convertSecondsToDate(
          fromBigNum(_publicRoundStartedAt, 0) +
          fromBigNum(_publicRoundDuration - 86400, 0)
        )
      );
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

      let _ogRoundDuration = await presaleContract.getOGRoundDuration();
      let _ogRoundStartedAt = await presaleContract.getOGRoundStartedAt();
      setOgRoundEndAt(
        convertSecondsToDate(
          fromBigNum(_ogRoundStartedAt, 0) + fromBigNum(_ogRoundDuration + 86400, 0)
        )
      );

      let _ogRoundTokenLimited = fromBigNum(
        await presaleContract.getOGRoundTokenLimited(address)
      );
      setOGRoundTokenLimited(_ogRoundTokenLimited);
    }

    // getting public round info
    let _isPublicRound = await presaleContract.checkPublicRound();
    setIsPublicRound(_isPublicRound);
    if (_isPublicRound) {
      let _publicRoundStartedAt =
        await presaleContract.getPublicRoundStartedAt();
      let _publicRoundDuration = await presaleContract.getPublicRoundDuration();
      setPublicRoundEndAt(
        convertSecondsToDate(
          fromBigNum(_publicRoundStartedAt, 0) +
          fromBigNum(_publicRoundDuration - 86400, 0)
        )
      );

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
      const value = event.target.value;
      if (tokenType === 3) {
        setInputTokens(value);
        const usdc = calculateUSDC(value)
        const usdcInSmallestUnit = usdc;
        // toBigNum(usdc, 0);
        const ethAmount = (usdcInSmallestUnit / ethPriceInUsdc).toFixed(9);
        setPriceForTokens(ethAmount);
        return;
      }
      if (
        /^\d*$/.test(value) &&
        (parseInt(value, 10) >= MIN_TOKEN_VALUE ||
          parseInt(value, 10) <= maxAllocation)
      ) {
        setInputTokens(value);
        setPriceForTokens(calculateUSDC(value));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleInputPrice = (event) => {
    try {
      const value = event.target.value;
      setPriceForTokens(Number(value));
      if (value === "") {
        setInputTokens(0);
      } else if (tokenType === 3) {
        const usdc = ethPriceInUsdc * value;
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
    if(number === 3){
      setPriceForTokens(0.217);
    setInputTokens(1000000);
    } else {
    setPriceForTokens(800);
    setInputTokens(1000000);
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
    let rate = (((totalTokensRequested * TOKEN_PRICE) / TOTAL_MAX_ALLOCATION) * 100).toFixed(4);
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
      return <img
        src="assets/images/tokens/usdc.webp"
        alt="USDC"
        className="object-contain w-6 h-6"
      />;
    } else if (tokenType === 2) {
      return <img
        src="assets/images/tokens/usdt.svg"
        alt="USDC"
        className="object-contain w-6 h-6"
      />;
    } else if (tokenType === 3) {
      return <img
        src="assets/images/tokens/eth.svg"
        alt="USDC"
        className="object-contain w-6 h-6"
      />;
    }
  };

  return (
    <div className="flex flex-col gap-5 md:gap-8">
      <div className="flex flex-col gap-2.5  md:flex-row md:items-start">
        <h1 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:text-left md:w-3/5">
          Pioneering the New Era of DeFi 3.0.
        </h1>
        <p className="text-center text-sm md:text-left md:text-xl md:w-2/5 font-light">
          <span className="text-white/60">
            VaultFinance is revolutionizing DeFi (Decentralized Finance), with
            APY backed by revenue-generating businesses.
          </span>
          <span className="font-semibold">
            &nbsp; VaultFi has undergone 2 security audits, 1 economic audit,
            and is led by a doxxed team.
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5 md:gap-5 md:flex-row md:items-start">
          <div className="flex flex-col gap-2.5 md:gap-5 md:flex-row md:items-start">
            <div className="flex flex-col gap-5 md:w-1/3">
              <div className="bg-[#080531] rounded-2xl" id="presale-form">
                <div className="p-5 md:p-8 space-y-4">
                  <div className="space-y-3">
                    <p className="font-bold uppercase text-fire text-center italic text-[55px] w-full truncate bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90 bg-clip-text">
                      {`$${formatNumberWithCommas(totalTokensRequested * TOKEN_PRICE)}`}
                    </p>
                    {/* <div className="flex flex-col text-white/50 flex-auto mt-10 items-center">
                      <p>
                        {isEnded && "Presale is over!"}
                        {!isEnded && isOGRound && "Time left until OG round ends"}
                        {!isEnded && isPublicRound && "Time left until Pre-sale ends:"}
                        {!isEnded && !isOGRound && !isPublicRound && "Round pending"}
                      </p>
                    </div>

                    <div className="flex text-white/50 flex-col items-center mt-5 mb-5">
                      {!isEnded &&
                        (isPublicRound && publicRoundEndAt != "" ? (
                          <FuseCountdown endDate={publicRoundEndAt} />
                        ) : (
                          isPublicRound && (
                            <p className="mt-10 mb-10">Loading...</p>
                          )
                        ))}

                      {!isEnded &&
                        (isOGRound && ogRoundEndAt != "" ? (
                          <FuseCountdown endDate={ogRoundEndAt} />
                        ) : (
                          isOGRound && (
                            <p className="mt-10 mb-10">Loading...</p>
                          )
                        ))}

                      {!isOGRound && !isPublicRound && <FuseCountdown endDate={"0"} />}
                    </div> */}

                    <div className="space-y-1">
                      <p className="text-xs text-white/50">
                        {calculateRateOfProgressBar()}% of minimum goal raised
                      </p>
                      <div className="relative h-2 overflow-hidden rounded-xl bg-white/20">
                        <div
                          className="absolute inset-0 h-full bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90"
                          style={{ width: `${calculateRateOfProgressBar()}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-right text-white/50">
                        $600,000
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-semibold text-center">
                        🔥 2631 Visitors in the last 24h
                      </p>
                      <p className="text-sm text-center text-white/50">
                        Listing price = $0.001
                      </p>
                    </div>
                    <hr className="border-white/10" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <p className="text-sm text-center text-white/50">
                      1 VaultFi token = $0.0008
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col w-full gap-1.5">
                      <div className="flex items-center gap-4">
                        <div className="grid grid-cols-3 gap-0.5 w-full rounded-xl overflow-hidden">
                          <button
                            onClick={() => selectTokenType(Number(3))}
                            className={`${tokenType === 3 ? 'bg-primary' : 'bg-white/10'} " p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75"`}>
                            <div className="relative flex">
                              <img
                                src="assets/images/tokens/eth.svg"
                                alt="ETH"
                                className="object-contain w-4 h-4"
                              />
                            </div>
                            ETH
                          </button>
                          <button
                            onClick={() => selectTokenType(Number(2))}
                            className={`${tokenType === 2 ? 'bg-primary' : 'bg-white/10'} " p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75"`}>
                            <div className="relative flex">
                              <img
                                src="assets/images/tokens/usdt.svg"
                                alt="USDT"
                                className="object-contain w-4 h-4"
                              />
                              <img
                                className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-primary"
                                src="assets/images/chains/ethereum.svg"
                              />
                            </div>
                            USDT
                          </button>
                          <button
                            onClick={() => selectTokenType(Number(1))}
                            className={`${tokenType === 1 ? 'bg-primary' : 'bg-white/10'} " p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75"`}>
                            <div className="relative flex">
                              <img
                                src="assets/images/tokens/usdc.webp"
                                alt="USDC"
                                className="object-contain w-4 h-4"
                              />
                              <img
                                className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-primary"
                                src="assets/images/chains/ethereum.svg"
                              />
                            </div>
                            USDC
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="from-token"
                        className="text-[11px] font-semibold uppercase text-white/50"
                      >
                        Amount in <span className="text-primary uppercase">{switchMoney(tokenType)}
                        </span> you
                        pay
                      </label>
                      <div className="relative">
                        <input
                          value={priceForTokens}
                          onChange={handleInputPrice}
                          type="number"
                          inputMode="numeric"
                          className="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                        // disabled={
                        //   !isConnected ||
                        //   (!isOGRound && !isPublicRound) ||
                        //   (isOGRound && !isOGRoundWhitelisted) ||
                        //   isEnded
                        // }
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                          {switchImage(tokenType)}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="from-token"
                        className="flex flex-wrap items-center text-[11px] font-semibold uppercase text-white/50"
                      >
                        <p className="my-auto">VaultFi token amount you receive</p>
                        <span
                          className="flex gap-1 ml-1"
                          style={{ color: 'rgb(253, 87, 247)' }}
                        >
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-50"
                          >
                            <path
                              d="M7.9987 1.92188C4.3187 1.92188 1.33203 4.90854 1.33203 8.58854C1.33203 12.2685 4.3187 15.2552 7.9987 15.2552C11.6787 15.2552 14.6654 12.2685 14.6654 8.58854C14.6654 4.90854 11.6787 1.92188 7.9987 1.92188ZM8.66536 13.2552H7.33203V11.9219H8.66536V13.2552ZM10.0454 8.08854L9.44536 8.70187C8.96536 9.18854 8.66536 9.58854 8.66536 10.5885H7.33203V10.2552C7.33203 9.52187 7.63203 8.85521 8.11203 8.36854L8.9387 7.52854C9.18536 7.28854 9.33203 6.95521 9.33203 6.58854C9.33203 5.85521 8.73203 5.25521 7.9987 5.25521C7.26536 5.25521 6.66536 5.85521 6.66536 6.58854H5.33203C5.33203 5.11521 6.52536 3.92187 7.9987 3.92187C9.47203 3.92187 10.6654 5.11521 10.6654 6.58854C10.6654 7.17521 10.4254 7.70854 10.0454 8.08854Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>
                      </label>
                      <div className="relative">
                        <input
                          label={"Token amount"}
                          value={inputTokens}
                          onChange={handleInputTokens}
                          // disabled={
                          //   !isConnected ||
                          //   (!isOGRound && !isPublicRound) ||
                          //   (isOGRound && !isOGRoundWhitelisted) ||
                          //   isEnded
                          // }
                          type="number"
                          inputMode="numeric"
                          className="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                          <img
                            src="/assets/images/tokens/token.svg"
                            alt="token"
                            className="object-contain w-6 h-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex w-6 mb-1.5">
                      <img
                        src="/assets/images/tokens/token.svg"
                        alt="token"
                        className="h-full"
                      />
                    </div>
                    <div className="text-center text-xs text-white/50">
                      In order to buy VaultFi tokens, please confirm the
                      transaction in your wallet. You may need to check the
                      wallet app if you're on mobile.
                    </div>
                  </div>
                  {!isConnected ?
                    <button onClick={openConnectModal}
                      className="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="">Connect Wallet</span>
                    </button> :
                    <button
                      className="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
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
            </div>
            <div className="flex md:w-2/3">
              <div className="flex flex-col items-center md:gap-10 w-full p-0 md:pb-14 md:p-7 bg-[#080531] rounded-2xl">
                <div className="flex w-full p-3 md:p-0 no-scrollbar">
                  <div className="flex w-fit md:w-full flex-shrink-0 py-1">
                    <div id="chart" className="flex relative">
                      <img
                        src="/assets/images/charts/Chart-desktop.jpg"
                        className="hidden md:flex w-full h-auto"
                      />
                      <img
                        src="/assets/images/charts/Chart-mobile.jpg"
                        className="flex md:hidden w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PresaleWidget)
