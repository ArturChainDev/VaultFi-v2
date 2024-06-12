import { memo, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { lighten, useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";

import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Typography,
  FormHelperText,
  TextField,
  Link,
} from "@mui/material";
import { CopyField } from "@eisberg-labs/mui-copy-field";
import {
  getContract,
  fromBigNum,
} from "src/app/services/web3.service";
import { useAccount } from "wagmi";
import PresaleData from "src/abis/Presale.json";
import { showMessage } from "app/store/fuse/messageSlice";
import { formatNumberWithCommas } from "src/app/services/utils.service.js";

function ReferralWidget(props) {
  const theme = useTheme();
  const updateFlag = useSelector((state) => state.updateFlag.value);
  const dispatch = useDispatch();
  const { address, isConnected } = useAccount();

  const defaultUrl = "https://presale.vault-finance.com/presale?r=";

  const [refUrl, setRefUrl] = useState(defaultUrl);
  const [refCode, setRefCode] = useState("");
  const [isCreatedRefCode, setIsCreatedRefCode] = useState(false);

  const [refereeCount, setRefereeCount] = useState(0);

  const [isBuyer, setIsBuyser] = useState(0);

  // const [referralData, setReferralData] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleRefCode = (event) => {
    const value = event.target.value;
    if (validateInput(value) === true) {
      setRefCode(value);
      setRefUrl(defaultUrl + value);
    }
  };

  useEffect(() => {
    const init = async () => {
      if (isConnected) {
        getReferralCodeIfExsits(address);
        await fetchChainData();
      }
    };
    init();
  }, [isConnected, address, updateFlag]);

  const getReferralCodeIfExsits = (address) => {
    axios
      .get(process.env.REACT_APP_API_URL + "/code/" + address)
      .then((response) => {
        if (response.data == "") {
          setRefUrl(defaultUrl + response.data.refcode);
          setRefCode("");
        } else {
          setRefCode(response.data.refcode);
          setRefUrl(defaultUrl + response.data.refcode);
          setIsCreatedRefCode(true);
          console.log(response.data);
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

  // const getReferralDataFromDB = () => {
  //   axios
  //     .get(process.env.REACT_APP_API_URL)
  //     .then((response) => {
  //       setReferralData(response.data);
  //     })
  //     .catch((error) => {
  //       dispatch(
  //         showMessage({
  //           message: "DB Connection Error!",
  //           variant: "error",
  //           anchorOrigin: {
  //             vertical: "top",
  //             horizontal: "right",
  //           },
  //         })
  //       );
  //     });
  // };

  const fetchChainData = async () => {
    const presaleContract = await getContract(
      PresaleData.address,
      PresaleData.abi
    );

    let _refereeCount = await presaleContract.getReferreeCount(address);
    setRefereeCount(fromBigNum(_refereeCount, 0));

    let _isBuyer = await presaleContract.isTokenBuyer(address);
    setIsBuyser(_isBuyer);
  };

  const handleCreateRefCode = async () => {
    if (refCode.length == 0) {
      dispatch(
        showMessage({
          message: "Please enter the referral code.",
          variant: "warning",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
      return;
    }
    if (!isValidRefCode(refCode)) {
      dispatch(
        showMessage({
          message: "Referral code not allowed!",
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
      return;
    }

    storeReferralDataToDB({ address: address, refcode: refCode });
  };

  const storeReferralDataToDB = async (formData) => {
    setLoading(true);
    await axios
      .post(process.env.REACT_APP_API_URL, formData)
      .then((response) => {
        let msg = response.data;
        if (msg.success == true) {
          setIsCreatedRefCode(true);
          dispatch(
            showMessage({
              message: "Your referral code was created successfully!",
              variant: "success",
              anchorOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            })
          );
          setLoading(false);
          return;
        }
        if (!msg.success && !msg.isUnique) {
          dispatch(
            showMessage({
              message: "The referral code exists.",
              variant: "error",
              anchorOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            })
          );

          setLoading(false);
          return;
        }
      })
      .catch((error) => {
        dispatch(
          showMessage({
            message: "DB Connection Error!\n" + error,
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          })
        );
        setLoading(false);
        return;
      });
    setLoading(false);
  };

  const isValidRefCode = (refCode) => {
    // Regular expression to match the conditions:
    // - ^[A-Za-z]: starts with a letter
    // - (?=.*\d)(?=.*[A-Za-z]): contains at least one letter and one number
    // - [A-Za-z\d]{5,}$: at least 5 characters long, only letters and numbers
    const regex = /^[A-Za-z](?=.*\d)(?=.*[A-Za-z])[A-Za-z\d]{4,11}$/;

    // Test the string against the regular expression
    return regex.test(refCode);
  };

  const validateInput = (input) => {
    if (input === "") {
      return true;
    } else if (input.length >= 1) {
      // Regular expression to match only letters and numbers
      const regex = /^[a-zA-Z0-9]+$/;
      // Test the input against the regex
      return regex.test(input);
    }
  };

  return (
    <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          Create Referral Link
        </Typography>
        <div className="mt-3 sm:mt-0 sm:ml-2"></div>
      </div>
      <div className="mt-10 mb-10">
        <hr />
      </div>
      <div className="mb-10"></div>

      <div className="flex flex-col flex-auto mt-10 mb-10">
        <TextField
          label="Referral Code"
          size="small"
          value={refCode}
          disabled={!isConnected || !isBuyer || isCreatedRefCode}
          onChange={(e) => handleRefCode(e)}
        />

        <FormHelperText id="component-helper-text">
          Referral code should start with a letter and be at least 5
          characters (max 12), with a mix of numbers and letters, NO symbols
        </FormHelperText>
      </div>
      <div className="flex flex-col flex-auto mt-20 mb-10">
        {!isConnected ? (
          <div className="flex flex-col flex-auto mt-10 mb-10 items-center">
            <Typography>Please connect your wallet!</Typography>
          </div>
        ) : !isBuyer ? (
          <div className="flex flex-col flex-auto mt-10 mb-10 items-center">
            <Typography>
              Referral code creation valid only after purchase!
            </Typography>
          </div>
        ) : (
          <CopyField
            disabled={true}
            label="Referral link"
            value={refUrl}
            size="small"
          />
        )}
      </div>
      {isConnected && isBuyer ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            bottom: "25px",
            typography: "body1",
            "& > :not(style) + :not(style)": {
              ml: 2,
            },
          }}
          className="gap-15 mt-10"
        >
          <Typography className="mt-5">Share on</Typography>
          <Link
            href={
              "https://twitter.com/intent/tweet?text=%F0%9F%8E%89+I+just+participated+in+%40vaultfi_io+presale%21+%F0%9F%8E%89%0D%0A%0D%0AUse+my+link+and+get+5%25+bonus+tokens%21+%0D%0Ahttps%3A%2F%2Fpresale.vault-finance.com%2Fpresale%3Fr%3D$" +
              refCode +
              "%0D%0A%0D%0APre-sale+will+end+once+all+tokens+are+sold-out.+Don%27t+miss+out%21%0D%0A%0D%0A%40vaultfi_io+is+a+fully+audited+DeFi+protocol+with+APY+backed+by+revenue+generating+businesses+led+by+%40coinrockcap%0D%0A%0D%0A%23VaultFi+%23DeFi+%23CoinRock+%23Presale"
            }
            sx={{
              background: "transparent !important",
              borderBottom: "0 !important",
            }}
            target="_blank"
          >
            <img
              className="w-full"
              style={{ width: "30px" }}
              src="assets/images/social-icons/x_white.svg"
              alt="footer logo"
            />
          </Link>
          <Link
            href={
              "https://t.me/share/url?url=https%3A%2F%2Fpresale.vault-finance.com%2Fpresale%3Fr%3D$" +
              refCode +
              "&text=%F0%9F%8E%89+I+just+participated+in+%40vaultfi_io+presale%21+%F0%9F%8E%89%0D%0A%0D%0AUse+my+link+and+get+5%25+bonus+tokens%21+%0D%0A"
            }
            sx={{
              background: "transparent !important",
              borderBottom: "0 !important",
            }}
            target="_blank"
          >
            <img
              className="w-full"
              style={{ width: "35px" }}
              src="assets/images/social-icons/telegram_white.svg"
              alt="footer logo"
            />
          </Link>
        </Box>
      ) : (
        ""
      )}
      <div className="flex flex-col flex-auto mt-5"></div>

      <div className="flex flex-col flex-auto mt-5 mb-10">
        <LoadingButton
          variant="contained"
          color="primary"
          disabled={!isConnected || !isBuyer || isCreatedRefCode}
          loading={loading}
          loadingPosition="end"
          onClick={handleCreateRefCode}
        >
          Create Referral Code
        </LoadingButton>
        <div className="flex flex-col flex-auto mt-10"></div>
      </div>

      <Box
        sx={{
          backgroundColor: (_theme) =>
            _theme.palette.mode === "light"
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
        className="grid grid-cols-1 border-t divide-x -m-24 mt-10"
      >
        <div className="flex flex-col items-center justify-center p-24 sm:p-32">
          <div className="text-5xl font-semibold leading-none tracking-tighter">
            {formatNumberWithCommas(refereeCount)}
          </div>
          <Typography className="mt-4 text-center text-secondary">
            Referrals
          </Typography>
        </div>
      </Box>
    </Paper>
  );
}

export default memo(ReferralWidget);
