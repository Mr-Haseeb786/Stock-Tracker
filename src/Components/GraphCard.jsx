import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const GraphCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde totam
          quis, ipsa magnam maxime fugit laborum quisquam atque natus fugiat.
        </Typography>
        <CardActionArea>
          <Typography variant=''>AAPL</Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default GraphCard;
