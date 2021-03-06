import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import NewItem from "./NewItem";
import { makeStyles } from "@material-ui/core/styles";
import NotFound from "./NotFound";
import NewDetail from "../src/NewDetail/NewDetail";
import SearchBox from "./SearchBox";
import NewList from "./NewList"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxSizing: "border-box",
    marginTop: "60px",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      margin: "60px auto auto auto",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "1280px",
      margin: "60px auto auto auto",
    },
  },
  
}));
export default function New() {

  const [count, setCount] = useState([1,2,3,4,5,6,7,8,9])
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchBox />
      <NewDetail />
      {/* <NewList /> */}
    </div>
  );
}
