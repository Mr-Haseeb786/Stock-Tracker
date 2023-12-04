import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDataFetch = () => {
  const { ticker } = useSelector((store) => store.stock);

  const API_KEY = "P8B09WZPIUEJ3KSR";
  const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;

  const stockQuery = useQuery({
    queryKey: ["dailyStocks"],
    queryFn: async () => {
      const resp = await axios.get(API_URL);
      return resp;
    },
  });

  return stockQuery;
};

export default useDataFetch;
