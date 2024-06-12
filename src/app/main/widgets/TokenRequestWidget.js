import Paper from "@mui/material/Paper";
import { lighten, useTheme } from "@mui/material/styles";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  LinearProgress,
  Box,
  Typography,
  FormHelperText,
  TextField,
  Button,
  Link,  
} from '@mui/material';

import { useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "src/app/store/updateFlagSlice";

import FuseCountdown from "@fuse/core/FuseCountdown";
import LoadingButton from "@mui/lab/LoadingButton";
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

const LinearProgressWithLabel = ({ value }) => {
  return (
    <Box position="relative" display="inline-flex" width="100%">
      <LinearProgress
        variant="determinate"
        value={value}
        style={{ width: "100%", height: "35px" }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >


        <Typography variant="body2" sx={{ color: "white" }}>{`${Math.round(
          value
        )}% sold`}</Typography>

      </Box>
    </Box>
  );
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function TokenRequestWidget(props) {
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

  const { address, isConnected } = useAccount();

  const [maxAllocation] = useState(MAX_TOKEN_VALUE);

  const [refCode, setRefCode] = useState("");
  const [referrer, setReferrer] = useState(ZERO_ADDR);

  const [inputTokens, setInputTokens] = useState(1000000);
  const [usdcForTokens, setUsdcForTokens] = useState(
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
        // await fetchRoundStatus();
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

    // getting OGRound info
    // let _isOGRound = await presaleContract.checkOGRound();
    // setIsOGRound(_isOGRound);
    // if (_isOGRound) {
    //   let _isOGRoundWhiltelisted = await presaleContract.isOGWhitelisted(
    //     address
    //   );
    //   setIsOGRoundWhitelisted(_isOGRoundWhiltelisted);

    //   let _ogRoundDuration = await presaleContract.getOGRoundDuration();
    //   let _ogRoundStartedAt = await presaleContract.getOGRoundStartedAt();
    //   setOgRoundEndAt(
    //     convertSecondsToDate(
    //       fromBigNum(_ogRoundStartedAt, 0) + fromBigNum(_ogRoundDuration + 86400, 0)
    //     )
    //   );

    //   let _ogRoundTokenLimited = fromBigNum(
    //     await presaleContract.getOGRoundTokenLimited(address)
    //   );
    //   setOGRoundTokenLimited(_ogRoundTokenLimited);
    // }

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
      // = await presaleContract.getPublicRoundStartedAt();
      // let _publicRoundDuration = await presaleContract.getPublicRoundDuration();
      setPublicRoundEndAt(
        convertSecondsToDate(
          fromBigNum(_publicRoundStartedAt, 0) +
          fromBigNum(_publicRoundDuration - 86400, 0)
        )
      );
      let _publicRoundTokenLimited = fromBigNum(
        _publicRowRoundTokenLimited
      );

      // let _publicRoundTokenLimited = fromBigNum(
      //   await presaleContract.getPublicRoundTokenLimited()
      // );
      setPublicRoundTokenLimited(_publicRoundTokenLimited);
    }

    // let _tokenRequested = fromBigNum(
    //   await presaleContract.getTokensRequestedOfWallet(address)
    // );
    // setTokenRequested(_tokenRequested);

    // let _bonusRequested = fromBigNum(
    //   await presaleContract.getBonusRequested(address)
    // );
    // setBonusRequested(_bonusRequested);

    let _totalTokensRequested = fromBigNum(
      _totalRowTokensRequested
    );
    // let _totalTokensRequested = fromBigNum(
    //   await presaleContract.totalTokensRequested()
    // );
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

  const incrementValue = () => {
    const roundedInputTokens = Math.round(inputTokens / STEP) * STEP;
    const increaseValue = Math.min(roundedInputTokens + STEP, MAX_TOKEN_VALUE);
    setInputTokens(Math.min(roundedInputTokens + STEP, MAX_TOKEN_VALUE));
    setUsdcForTokens(
      Math.min(calculateUSDC(increaseValue), MAX_TOKEN_VALUE * TOKEN_PRICE)
    );
  };

  // Handler to decrement the value
  const decrementValue = () => {
    const roundedInputTokens = Math.round(inputTokens / STEP) * STEP;
    const decreaseValue = Math.max(roundedInputTokens - STEP, MIN_TOKEN_VALUE);
    setInputTokens(Math.max(roundedInputTokens - STEP, MIN_TOKEN_VALUE));
    setUsdcForTokens(
      Math.max(calculateUSDC(decreaseValue), MIN_TOKEN_VALUE * TOKEN_PRICE)
    );
  };

  const handleInputTokens = (event) => {
    const value = event.target.value;
    if (
      /^\d*$/.test(value) &&
      (parseInt(value, 10) >= MIN_TOKEN_VALUE ||
        parseInt(value, 10) <= maxAllocation)
    ) {
      setInputTokens(value);
      setUsdcForTokens(calculateUSDC(value));
    }
  };

  const handleDepositUSDC = async () => {
    if (!isConnected) {
      return;
    }

    if (Math.round(inputTokens / STEP) != inputTokens / STEP) {
      dispatch(
        showMessage({
          message: "Error: Token amount should be in increments of 100k!",
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
      setInputTokens(Math.round(inputTokens / STEP) * STEP);
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
      USDCData.address,
      USDCData.abi,
      signer
    );

    const usdtContract = await getContract(
      USDTData.address,
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

    const ethPriceInUsdc = 3680; // ETH price in USDC

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
      console.log(toBigNum(usdc/3680, 18));
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
    let rate = ((totalTokensRequested / TOTAL_MAX_ALLOCATION) * 100).toFixed(4);
    return rate;
  };

  const calculateUSDC = (tokens) => {
    return (TOKEN_PRICE * tokens).toFixed(2);
  };

  return (
    <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <div className="mt-3 sm:mt-0 sm:ml-2">
          <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
            {isOGRound &&
              (isOGRoundWhitelisted ? (
                "OG Round"
              ) : (
                <Alert severity="warning">
                  Your wallet is not whitelisted for OG round, please wait until
                  OG round is over to enter pre-sale!
                </Alert>
              ))}
            {isPublicRound && "The VaultFi Pre-sale is OPEN!"}
            {!isOGRound && !isPublicRound && "Presale has not started"}
          </Typography>
        </div>
      </div>

      <div className="mt-10 mb-10">
        <hr></hr>
      </div>

      <div className="flex flex-col flex-auto mt-10 items-center">
        <Typography>
          {isEnded && "Presale is over!"}
          {!isEnded && isOGRound && "Time left until OG round ends"}
          {!isEnded && isPublicRound && "Time left until Pre-sale ends:"}
          {!isEnded && !isOGRound && !isPublicRound && "Round pending"}
        </Typography>
      </div>

      <div className="flex flex-col items-center mt-5 mb-5">
        {!isEnded &&
          (isPublicRound && publicRoundEndAt != "" ? (
            <FuseCountdown endDate={publicRoundEndAt} />
          ) : (
            isPublicRound && (
              <Typography className="mt-10 mb-10">Loading...</Typography>
            )
          ))}

        {!isEnded &&
          (isOGRound && ogRoundEndAt != "" ? (
            <FuseCountdown endDate={ogRoundEndAt} />
          ) : (
            isOGRound && (
              <Typography className="mt-10 mb-10">Loading...</Typography>
            )
          ))}

        {!isOGRound && !isPublicRound && <FuseCountdown endDate={"0"} />}
      </div>

      <div className="flex flex-col flex-auto mt-5"></div>

      <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabel value={calculateRateOfProgressBar()} />
      </Box>

      <Box sx={{ mt: 2 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Purchase with</FormLabel>
          <RadioGroup
            row
            aria-label="tokenType"
            name="tokenType"
            value={tokenType}
            onChange={(event) => setTokenType(Number(event.target.value))}
          >
            <FormControlLabel
              value={1}
              control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#cca44d' } }} />}
              label="USDC"
            />
            <FormControlLabel
              value={2}
              control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#cca44d' } }} />}
              label="USDT"
            />
            <FormControlLabel
              value={3}
              control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#cca44d' } }} />}
              label="ETH"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-24">
        <div className=" flex flex-col flex-auto sm:col-span-2 md:col-span-4 lg:col-span-3">
          <Box display="flex" alignItems="left" justifyContent="left" gap={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={decrementValue}
              disabled={
                !isConnected ||
                (!isOGRound && !isPublicRound) ||
                (isOGRound && !isOGRoundWhitelisted) ||
                isEnded
              }
            >
              -
            </Button>
            <div className="flex flex-col flex-auto">
              <TextField
                label={"Token amount"}
                value={inputTokens}
                onChange={handleInputTokens}
                variant="outlined"
                size="small"
                disabled={
                  !isConnected ||
                  (!isOGRound && !isPublicRound) ||
                  (isOGRound && !isOGRoundWhitelisted) ||
                  isEnded
                }
              />
                 
              <FormHelperText
                id="component-helper-text"
                sx={{ textAlign: "left" }}
              >
                
              </FormHelperText>
              
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={incrementValue}
              disabled={
                !isConnected ||
                (!isOGRound && !isPublicRound) ||
                (isOGRound && !isOGRoundWhitelisted) ||
                isEnded
              }
            >
              +
            </Button>
          </Box>
        </div>

        <div className="flex flex-col flex-auto sm:col-span-2 md:col-span-4 lg:col-span-1">
          <LoadingButton
            variant="contained"
            color="primary"
            loading={loading}
            loadingPosition="end"
            onClick={handleDepositUSDC}
            disabled={
              !isConnected ||
              (!isOGRound && !isPublicRound) ||
              (isOGRound && !isOGRoundWhitelisted) ||
              isEnded
            }
          >
            Enter
          </LoadingButton>
        </div>
      </div>

      <Box
        sx={{
          backgroundColor: (_theme) =>
            _theme.palette.mode === "light"
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
        className="grid grid-cols-2 border-t divide-x -m-24 mt-16"
      >
        <div className="flex flex-col items-center justify-center p-24 sm:p-32">
          <div className="text-4xl font-semibold leading-none tracking-tighter">
            {formatNumberWithCommas(tokenRequested)}
          </div>
          <Typography className="mt-4 text-center text-secondary">
            Tokens purchased
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center p-6 sm:p-8">
          <div className="text-4xl font-semibold leading-none tracking-tighter">
            {formatNumberWithCommas(bonusRequested)}
          </div>
          <Typography className="mt-4 text-center text-secondary">
            Bonus earned
          </Typography>
        </div>
      </Box>
    </Paper>
  );
}

export default memo(TokenRequestWidget);
