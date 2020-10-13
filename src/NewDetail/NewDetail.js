import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DateRangeIcon from "@material-ui/icons/DateRange";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ShareIcon from "@material-ui/icons/Share";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import NewDeatilLeft from "./NewDetailLeft";
import img1 from "../image/thum.png";
import NewItem from "../NewItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxSizing: "border-box",
    margin: "48px 11px 0 11px",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      margin: "48px 11px 0 11px",
    },
    [theme.breakpoints.up("md")]: {},
  },
  newDetailContainer: {
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "70% 30% ",
    },
  },
}));

export default function NewDetail() {
  const classes = useStyles();
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div className={classes.root}>
      <Grid container className={classes.newDetailContainer}>
        <NewDeatilLeft />
        <Grid item>
          {count.map((item) => (
            <NewItem />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
