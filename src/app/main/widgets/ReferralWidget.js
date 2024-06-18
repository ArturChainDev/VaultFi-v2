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
import { useAccount, useDisconnect } from "wagmi";
import PresaleData from "src/abis/Presale.json";
import { showMessage } from "app/store/fuse/messageSlice";
import { formatNumberWithCommas } from "src/app/services/utils.service.js";

function ReferralWidget(props) {
  const updateFlag = useSelector((state) => state.updateFlag.value);
  const dispatch = useDispatch();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [copyState, setCopyState] = useState(false);

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

  const copyAction = () => {
    setCopyState(true);
    copyToClipboard(refUrl);
    setTimeout(() => {
      setCopyState(false)
    }, 1000)
  }

  const copyToClipboard = (text) => {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

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
    <>
      <p className="text-left font-medium">
        Create Referral Link
      </p>
      {/* <hr /> */}
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/2">
          <p className="md:pt-4 text-white/70" id="component-helper-text">
            Referral code should start with a letter and be at least 5
            characters (max 12), with a mix of numbers and letters, NO symbols
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 gap-2 py-4">
          <input
            className="w-full p-2 bg-transparent border rounded-lg border-[var(--gold)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)]"
            placeholder="Referal Code"
            value={refCode}
            disabled={!isConnected || !isBuyer || isCreatedRefCode}
            onChange={(e) => handleRefCode(e)}
          />
          <div className="flex flex-col flex-auto ">
            {!isConnected ? (
              <div className="flex flex-col flex-auto items-center">
                <p className="font-lg text-white/70">Please connect your wallet!</p>
              </div>
            ) : !isBuyer ? (
              <div className="flex flex-col flex-auto items-center">
                <p className="font-lg text-white/70">
                  Referral code creation valid only after purchase!
                </p>
              </div>
            ) : (
              <div className="relative">
                <input
                  className="w-full p-2 bg-transparent border rounded-lg border-[var(--gold)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)]"
                  disabled={true}
                  value={refUrl}
                />
                <button onClick={copyAction} className="absolute top-[13px] right-[5px] flex bg-[var(--purple)] items-center ">
                  <div className="group relative inline-block">
                    <img src="icons/copy.svg" width={18} height={18} alt="CopyIcon" />
                    <div
                      className={copyState ? "hidden" : "group-hover:block" + " hidden z-50 absolute flex items-center justify-center leading-[0.6875rem] text-[11px] bg-white/20 rounded-full font-medium text-white py-[5px] px-[10px] whitespace-nowrap bottom-[-28px] right-[-5px]"}
                      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 5px 5px 10px 0px" }}>
                      copy url
                    </div>
                    <div
                      className={(copyState ? "flex" : "hidden") + " z-50 absolute items-center justify-center leading-[0.6875rem] text-[11px] bg-white/20 rounded-full font-medium text-white py-[5px] px-[10px] whitespace-nowrap bottom-[-28px] right-[-5px]"}
                      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 5px 5px 10px 0px" }}>
                      copied
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
          {isConnected && isBuyer ? (
            <div
              className="flex items-center justify-center gap-2"
            >
              <p className="font-medium">Share on</p>
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
                  style={{ width: "20px" }}
                  src="/icons/x_white.svg"
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
                  style={{ width: "20px" }}
                  src="/icons/telegram_white.svg"
                  alt="footer logo"
                />
              </Link>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-col flex-auto"></div>

          <div className="flex flex-col flex-auto">
            <LoadingButton
              sx={{ fontSize: "16px" }}
              variant="contained"
              color="primary"
              disabled={!isConnected || !isBuyer || isCreatedRefCode}
              loading={loading}
              loadingPosition="end"
              onClick={handleCreateRefCode}
            >
              Create Referral Code
            </LoadingButton>
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <p className="font-medium max-w-[200px] md:max-w-full">Your referrals</p>
        <p className="font-medium text-[var(--green)]">{formatNumberWithCommas(refereeCount)}</p>
      </div>
      <div className='flex justify-between'>
        <p className="font-medium max-w-[200px] md:max-w-full">Free bonus tokens earned via referrals</p>
        <p className="font-medium text-[var(--green)]">{formatNumberWithCommas(0)}</p>
      </div>
      <button className="btn connect_wallet_btn text-center justify-center" onClick={() => disconnect()}>
        Disconnect
      </button>
    </>
  );
}

export default memo(ReferralWidget);
