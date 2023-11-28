import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

const GraphCard = () => {
  return (
    <Card
      variant='outlined'
      sx={{
        bgcolor: "lightblue",
        overflow: "unset",
        marginTop: "4rem",
        marginBottom: "4rem",
      }}
      className='card-comp'
    >
      <CardContent>
        <div className='graph-div'></div>
        <div className='separater'></div>
        <div className='fav-btn'>
          <Button variant='contained' className='fav-btn'>
            <FavoriteBorderIcon />
          </Button>
        </div>
        <Grid container justifyContent={"center"}>
          <Grid item xs={6} textAlign={"left"} justifySelf={"flex-start"}>
            <Typography variant='h6'>AAPL</Typography>
          </Grid>
          <Grid item xs={6} textAlign={"right"} alignSelf={"center"}>
            <Typography variant='h6' fontSize={"0.8rem"}>
              Past 100 Days
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GraphCard;
