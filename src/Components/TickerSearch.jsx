import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";

// State Managment

import { getStock } from "../slices/stockSlice/stockSlice";

const TickerSearch = () => {
  const [tickerSym, setTickerSym] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tickerSym) {
      alert("Please Enter a ticker Name");
      return;
    }

    dispatch(getStock(tickerSym));
    setTickerSym("");

    return;
  };
  return (
    <form action='' onSubmit={handleSubmit}>
      <Grid
        container
        gap={"1rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <TextField
            label='Enter Stock Tiker'
            value={tickerSym}
            variant='outlined'
            onChange={(e) => setTickerSym(e.target.value.toUpperCase())}
          />
        </Grid>
        <Grid item xs={1}>
          <Button variant='contained' type='submit'>
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TickerSearch;
