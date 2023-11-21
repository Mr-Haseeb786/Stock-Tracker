import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import GraphCard from "../Components/GraphCard";
// ========= Material UI Components ===========
import {
  Card,
  Typography,
  Container,
  TextField,
  Grid,
  CardContent,
} from "@mui/material/";

const API_KEY = "P8B09WZPIUEJ3KSR";
const company = "IBM";
const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`;

const useStockQuery = () => {
  return useQuery({
    queryKey: ["dailyStocks"],
    queryFn: async () => {
      const resp = await axios.get(API_URL);
      return resp;
    },
  });
};

const LandingPage = () => {
  let stockInfo = [];

  const stockQuery = useStockQuery();

  if (stockQuery.isLoading) {
    return <Typography variant='h3'>Loading...</Typography>;
  }

  if (stockQuery.isError) {
    return <Typography variant='h3'>{stockQuery.error.message}</Typography>;
  }

  const stockData = stockQuery.data.data;

  for (let key in stockData["Time Series (Daily)"]) {
    stockInfo.push(stockData["Time Series (Daily)"][key]["4. close"]);
  }

  console.log(stockInfo);

  return (
    <Container>
      <section className='home-body'>
        <TextField label='Enter Stock Tiker' variant='outlined' />

        <GraphCard />
      </section>
      {/* search section */}

      {/* graph section */}
      {/* end of graph section */}

      {/* fav stocks section */}
      {/* end of fav stocks section */}
    </Container>
  );
};

export default LandingPage;
