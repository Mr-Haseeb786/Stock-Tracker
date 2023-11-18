import React from "react";
import axios from "axios";
import { Typography, Container } from "@mui/material/";
import { useQuery } from "@tanstack/react-query";

const LandingPage = () => {
  const API_KEY = "P8B09WZPIUEJ3KSR";
  const company = "IBM";
  const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`;

  let stockInfo = [];

  const stockQuery = () => {
    return useQuery({
      queryKey: ["dailyStocks"],
      queryFn: async () => {
        const resp = await axios.get(API_URL);
        return resp;
      },
    });
  };

  const stockData = stockQuery().data.data;

  for (let key in stockData["Time Series (Daily)"]) {
    stockInfo.push(stockData["Time Series (Daily)"][key]["4. close"]);
  }

  console.log(stockInfo);
  console.log(stockInfo.lastIndexOf(stockInfo));

  return (
    <Container>
      <Typography variant='h4'>Stocks Info</Typography>;
    </Container>
  );
};

export default LandingPage;
