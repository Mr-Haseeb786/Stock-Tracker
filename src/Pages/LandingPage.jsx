import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import GraphCard from "../Components/GraphCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useDataFetch from "../Hooks/useDataFetch";

// ========= Material UI Components ===========
import {
  Card,
  Typography,
  Container,
  TextField,
  Grid,
  CardContent,
  Button,
} from "@mui/material/";
// =========== Material UI Icons ============
import SearchIcon from "@mui/icons-material/Search";
import TickerSearch from "../Components/TickerSearch";

const LandingPage = () => {
  const { ticker } = useSelector((store) => store.stock);

  let stockInfo = [];

  // const stockQuery = useDataFetch();
  const stockQuery = useDataFetch();

  useEffect(() => {
    stockQuery.refetch();
  }, [ticker]);

  if (stockQuery.isLoading) {
    return <Typography variant='h3'>Loading...</Typography>;
  }

  if (stockQuery.isError) {
    console.log(stockQuery.error.message);

    return <Typography variant='h3'>{stockQuery.error.message}</Typography>;
  }

  const stockData = stockQuery.data.data;

  console.log(stockData);

  for (let key in stockData["Time Series (Daily)"]) {
    stockInfo.push(stockData["Time Series (Daily)"][key]["4. close"]);
  }

  console.log(stockInfo);

  return (
    <Container>
      <section className='home-body'>
        <TickerSearch />

        <GraphCard />

        <div className='separater'></div>

        {/* Favourites Section */}

        <article className='fav-stock-section'>
          <Typography
            variant='h4'
            textAlign={"center"}
            marginTop={"2rem"}
            sx={{ opacity: "0.35" }}
          >
            Your Favourites
          </Typography>
          {/* <GraphCard /> */}
        </article>

        {/* End of Favourites Section */}
      </section>
    </Container>
  );
};

export default LandingPage;
