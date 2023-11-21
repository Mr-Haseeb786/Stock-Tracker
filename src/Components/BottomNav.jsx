import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { useNavigate } from "react-router-dom";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(1);
  const navigate = useNavigate();

  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels={false}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ bgcolor: "lightpink" }}
        >
          <BottomNavigationAction
            label='Stocks'
            icon={<ShowChartIcon />}
            onClick={() => navigate("/about")}
          />
          <BottomNavigationAction
            label='Home'
            icon={<HomeIcon />}
            onClick={() => navigate("/")}
          />
          <BottomNavigationAction
            label='Crypto'
            icon={<CurrencyBitcoinIcon />}
            onClick={() => navigate("/about")}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
