import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import { formatNumberWithCommas } from "src/app/services/utils.service.js";

function TokenPriceWidget() {
  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-8 pt-12">
        <Typography
          className="px-16 lg:text-lg mb:text-1xl font-medium tracking-tight leading-6 truncate"
        >
          {"Token Price"}
        </Typography>
      
      </div>
      <div className="text-center mt-20 mb-20">
        <Typography
          className="lg:text-4xl mb:text-3xl font-bold tracking-tight leading-none"
          color={"#cca44d"}
        >
          0.0008 USDC
        </Typography>
      </div>
      <div className="text-center mt-10 mb-10"></div>
    </Paper>
  );
}

export default memo(TokenPriceWidget);
