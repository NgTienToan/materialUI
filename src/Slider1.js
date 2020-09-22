import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import img1 from "./image/grimg1.png";
import img2 from "./image/Rectangle 24.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "60px",
    height: "100vh",
    marginLeft: "11px",
    marginRight: "11px",

    [theme.breakpoints.up("sm")]: {
      width: "590px",
      margin: "auto",
      padding: "0",
    },
    [theme.breakpoints.up("md")]: {
      width: "960px",
      margin: "auto",
      padding: "0",
    },
    [theme.breakpoints.up("lg")]: {
      width: "1280px",
      margin: "auto",
      padding: "0",
    },
  },
  group1: {
    top: "32%",
    display: "flex",
    flexDirection: "column",
    width: "96%",
    position: "absolute",
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      top: "24%",
      width: "96%",
    },
  },
  group1Elip: {
    position: "absolute",
    backgroundColor: "#ffffff",
    top: "70%",
  },
  elip1: {
    position: "absolute",
    left: "-7px",
    height: "15px",
    width: "15px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
  },
  group2Elip: {
    position: "absolute",
    backgroundColor: "#ffffff",
    top: "80%",
  },
  elip2: {
    position: "absolute",
    left: "-7px",
    height: "15px",
    width: "15px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
  },
  group3Elip: {
    position: "absolute",
    backgroundColor: "#ffffff",
    top: "5%",
  },
  elip3: {
    position: "absolute",
    left: "-7px",
    height: "15px",
    width: "15px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
  },
  textGroup: {
    color: "#ffffff",
  },
  text1: {
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.43",
  },
  text2: {
    textTransform: "uppercase",
    fontSize: "36px",
    lineHeight: "46px",
    fontWeight: "bold",
    lineHeight: "1.22",
  },
  text3: {
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.5px",
    lineHeight: "1.57",
  },
  group4: {
    display: "flex",
    height: "100vh",
    position: "absolute",
    top: "60px",
    right: "11px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // position: "absolute",
    },
  },
  line1: {
    position: "absolute",
    height: "20.5%",
    width: "1.5px",
    backgroundColor: "#FFFFFF",
    opacity: "0.3",
  },
  line2: {
    position: "absolute",
    right: "14.5%",
    width: "1.5px",
    backgroundColor: "#FFFFFF",
    height: "100%",
    opacity: "0.3",
    [theme.breakpoints.up("sm")]: {
      right: "22%%",
    },
  },
  line3: {
    position: "absolute",
    right: "0",
    width: "1.5px",
    backgroundColor: "#FFFFFF",
    height: "100%",
    opacity: "0.3",
  },
  group2: {
    position: "absolute",
    top: "60%",
    right: "11px",
    width: "100%",
  },
  img1: {
    height: "194px",
    width: "300px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  group3: {
    position: "absolute",
    top: "20%",
    right: "11px",
    width: "fit-content",
  },
  img2: {
    // position: "absolute",
    height: "150px",
    width: "150px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function Silder2() {
  const classes = useStyles();

  return (
    <Grid container={false} className={classes.root}>
      <Grid item xs={12} md={7} lg={7} className={classes.group1}>
        <div className={classes.textGroup}>
          <Typography className={classes.text1}>Chúng tôi coi trọng</Typography>
          <Typography className={classes.text2}>Văn hóa & tri thức</Typography>
          <Typography className={classes.text3}>
            BGlobaler luôn không ngừng học hỏi những kiến thức, công nghệ mới
            nhất và hoàn thiện bản thân
          </Typography>
        </div>
      </Grid>
      <Grid item className={classes.group2} xs={11} md={12}>
        <img src={img1} className={classes.img1} />
      </Grid>

      <Grid item className={classes.group3} xs={11} md={12}>
        <img src={img2} className={classes.img2} />
      </Grid>
      <Grid item className={classes.group4} xs={10} md={12}>
        <div className={classes.line1}>
          <div item className={classes.group1Elip}>
            <div className={classes.elip1}></div>
          </div>
        </div>
        <div className={classes.line2}>
          <div item className={classes.group2Elip}>
            <div className={classes.elip2}></div>
          </div>
        </div>
        <div className={classes.line3}>
          <div item className={classes.group3Elip}>
            <div className={classes.elip3}></div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
