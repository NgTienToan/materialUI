import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import NewItem from "./NewItem";
import { makeStyles } from "@material-ui/core/styles";
import NotFound from "./NotFound";
import NewDetail from "../src/NewDetail/NewDetail";
import SearchBox from "./SearchBox";

const useStyles = makeStyles((theme) => ({

  NewList: {
    margin: "12px 0 0 0",
    display: "flex",
    flexWrap :"wrap",
    [theme.breakpoints.up("sm")]: {
      margin: "36px 0 0 0",
    },
  }
}));
export default function New() {

  const [count, setCount] = useState([1,2,3,4,5,6,7,8,9])
  const classes = useStyles();
  return (

      <Grid container className={classes.NewList} xs={12} sm={12} md={12} spacing={3}>
          {
          count.length === 0 
          ? <NotFound/> 
          :
          count.map(item => (
            <Grid item xs={12} sm={6} md={4}>
            <NewItem />
          </Grid>
          ))}
        
      </Grid> 
  );
}
