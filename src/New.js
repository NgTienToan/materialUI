import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import InputBase from "@material-ui/core/InputBase";
import NewItem from "./NewItem";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import NotFound from "./NotFound"


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
  searchContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "0",
    marginLeft: "0",
    padding: "0 11px",
    marginTop: "60px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "60px 0 0 0",
    },
  },
  pageLinkList: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    
    [theme.breakpoints.up("sm")]: {
      maxWidth: "605px",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "605px",
      justifyContent: "space-between",
    },
  },
  pageLinkItem: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  pageName: {
    color: "#3B404C",
    textTransform: "uppercase",
    fontSize: "20px",
    fontWeight: "600",
    "&:hover": {
      color: "#24BDC7",
      cursor: "pointer",
    },
  },
  search: {
    position: "relative",
    background: "#EBECED",
    borderRadius: "5px",
    border: "1px solid #CECFD2",
    height: "46px",
    marginTop: "24px",
    padding: "13px 31px 13px 9px",
    alignItems: "center",
    display: "flex",
    width: "100%",
    maxWidth: "605px",
    [theme.breakpoints.up("sm")]: {
      
    },
    [theme.breakpoints.up("md")]: {
      
    },
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    color: "#CECFD2",
    right: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    padding: "0",
    width: "100%",
    lineHeight: "20px",
  },
  inputInput: {
    width: "100%",
    lineHeight: "20px",
    fontSize: "16px",
    fontWeight: "400",
    height: "100%",
    padding: "0",
  },
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
    <div className={classes.root}>
      <Grid container className={classes.searchContainer} xs={12} sm={12} md={12}>
        <Grid item className={classes.pageLinkList} xs={12} sm={10} md={6}>
          {["tất cả", "tin mới", "tuyển dụng"].map((text, index) => (
            <Link button key={text} className={classes.pageLinkItem}>
              <Typography className={classes.pageName}>{text}</Typography>
            </Link>
          ))}
        </Grid>
        <Grid item className={classes.search} xs={12} sm={10} md={6}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Tìm kiếm bài viết"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Grid>
      </Grid>
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
    </div>
  );
}
