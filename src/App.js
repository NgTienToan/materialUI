import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "1440px",
    height: "800px",
    left: "0px",
    top: "0px",
    background: "linear-gradient(72.67deg, #6258F7 0.85%, #22A7F0 100%)",
    boxSizing: "border-box",
    fontFamily: "Arial"
  },
  group1: {
    position: "absolute",
    width: "710px",
    height: "338px",
    left: "100px",
    top: "235px",
    zIndex: "1",
  },
  group11: {
    // width: "207px",
    height: "30px",
    fontSize: "18px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.67",
    letterSpacing: "normal",
    color: "#ffffff",
    textTransform: "uppercase",
  },
  group12: {
    position: "absolute",
    left: "0.14%",
    right: "0%",
    top: "11.83%",
    bottom: "43.2%",
    textTransform: "uppercase",
    color: "#ffffff",
    // fontFamily: "Montserrat",
    fontSize: "64px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "76px",
  },
  group13: {
    position: "absolute",
    left: "0.14%",
    right: "44.51%",
    top: "63.91%",
    bottom: "0%",
    color: "#ffffff",
    // fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: "22px",
  },
  group2: {
    position: "absolute",
    width: "710px",
    height: "450px",
    left: "415px",
    top: "198px",
    zIndex: "0",
    animation: "$bounce1 10s infinite",
  },
  img1: {
    width: "710px",
    height: "450px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  group3: {
    position: "absolute",
    width: "185px",
    height: "185px",
    left: "1150px",
    top: "130px",
    background: "red",
    zIndex: "0",
    animation: "$bounce 10s infinite",
  },
  img2: {
    width: "185px",
    height: "185px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  group4: {
    position: "absolute",
    height: "180px",
    left: "7.01%",
    right: "28.96%",
    top: "calc(50% - 180px/2 + 265px)",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "180px",
    lineHeight: "180px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: "#FFFFFF",
    opacity: "0.1",
  },
  line1: {
    position: "absolute",
    height: "100vh",
    left: "1335px",
    opacity: 0.3,
    border: "1px solid #FFFFFF",
  },
  line2: {
    position: "absolute",
    height: "100vh",
    left: "1125px",
    opacity: 0.3,
    border: "1px solid #FFFFFF",
  },
  line3: {
    position: "absolute",
    height: "221px",
    left: "178px",
    opacity: 0.3,
    border: "1px solid #FFFFFF",
  },
  elip3: {
    position: "absolute",
    width: "15px",
    height: "15px",
    left: "172px",
    top: "196px",
    background: "#FFFFFF",
    borderRadius: "50%",
  },
  elip1: {
    position: "absolute",
    width: "10px",
    height: "10px",
    left: "1330px",
    top: "100px",
    background: "#FFFFFF",
    borderRadius: "50%",
  },
  elip2: {
    position: "absolute",
    width: "20px",
    height: "20px",
    left: "1115px",
    top: "688px",
    background: "#FFFFFF",
    borderRadius: "50%",
  },
  "@keyframes bounce": {
    "0%": {
      height: "185px",
      width: "185px",
    },
    "50%": {
      height: "185px",
      width: "185px",
      transform: 'translateY(450px)'
    },
    "100%": {
      transform: 'translateY(0px)',
    },
    
  },
  "@keyframes bounce1": {
    "0%": {
      width: "710px",
      height: "450px",
    },
    "50%": {
      width: "710px",
      height: "450px",
      transform: 'translateY(-100px)'
    },
    "100%": {
      transform: 'translateY(0px)',
    },
    
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <div className={classes.group1}>
          <div className={classes.group11}>chúng tôi coi trọng</div>
          <div className={classes.group12}>
            <span>Văn hóa</span>
            <br></br>
            <span>& Tri thức</span>
          </div>
          <div className={classes.group13}>
            BGlobaler luôn không ngừng học hỏi những kiến thức, công nghệ mới
            nhất và hoàn thiện bản thân.
          </div>
        </div>
        <div className={classes.group2}>
          <img src={img1} className={classes.img1} />
        </div>
        <div className={classes.group3}>
          <img src={img2} className={classes.img2} />
        </div>
        <div className={classes.group4}>bglobal</div>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
        <div className={classes.elip3}></div>
        <div className={classes.elip2}></div>
        <div className={classes.elip1}></div>
      </Grid>
    </div>
  );
}

export default App;
