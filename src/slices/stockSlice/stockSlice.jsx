import { createSlice } from "@reduxjs/toolkit";

const initialStockState = {
  ticker: "AAPL",
  favStocks: [],
};

const stockSlice = createSlice({
  name: "stock",
  initialState: initialStockState,
  reducers: {
    getStock: (state, action) => {
      state.ticker = action.payload;

      console.log(state.ticker);
    },

    favClick: (state, action) => {
      state.favStocks.push(action.payload);
    },
  },
});

export const { getStock, favClick } = stockSlice.actions;
export default stockSlice.reducer;
