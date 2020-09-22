import React from "react";
import Grid from "@material-ui/core/Grid";
import img1 from "./image/grimg1.png";
import img2 from "./image/Rectangle 24.png";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "60px",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "11px",
      paddingRight: "11px",
    },
  },
  group1: {
    color: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "24%",
    },
  },
  textGroup: {
    top: "10%",
  },
  text1: {
    textTransform: "uppercase",
    fontSize: "14px",
  },
  text2: {
    textTransform: "uppercase",
    fontSize: "36px",
  },
  text3: {
    fontSize: "14px",
  },
  group1Elip : {
    height: "40px"
  },
  elip1: {
    position: "absolute",
    height: "15px",
    width: "15px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    left: "7%",
  },
  group2: {
    position: "absolute",
    height: " 218px",
    width: "310px",
    top: "58%"
  },
  img1: {
    height: "194px",
    width: "305px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  group3: {
    position: "absolute",
    height: " 184px",
    width: "155px",
    top: "20%",
    right: "0"
  },
  img2: {
    height: "150px",
    width: "150px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  group4: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      left: "11.5%",
      width: "85.3%",
      height: "91%",
    },
  },
  line1: {
    left: 0,
    height: "20.5%",
    width: "1px",
    backgroundColor: "#FFFFFF",
  },
  line2: {
    position: "absolute",
    right: "14.5%",
    width: "1px",
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  line3: {
    position: "absolute",
    right: "0",
    width: "1px",
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  group5: {
    position: "absolute",
    bottom: "1.05%",
    right: "12.8%",
    left: "0"
  },
  group5_Name: {
    fontSize: "64px",
    lineHeight: "80px",
    textTransform: "uppercase",
    color: "#ffffff",
    opacity: "0.07",
    fontWeight: "bold",
  },
}));

export default function Slider() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root} xs={12} lg={12}>
      <Grid className={classes.group1}>
        <div className={classes.group1Elip}>
          <div className={classes.elip1}></div>
        </div>
        <div className={classes.textGroup}>
          <Typography className={classes.text1}>Chúng tôi coi trọng</Typography>
          <Typography className={classes.text2}>Văn hóa & tri thức</Typography>
          <Typography className={classes.text3}>
            BGlobaler luôn không ngừng học hỏi những kiến thức, công nghệ mới
            nhất và hoàn thiện bản thân
          </Typography>
        </div>
      </Grid>
      <Grid className={classes.group2}>
        <img src={img1} className={classes.img1} />
      </Grid>
      <Grid className={classes.group3}>
        <img src={img1} className={classes.img2} />
      </Grid>
      <Grid className={classes.group4}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </Grid>
      <Grid className={classes.group5}>
        <Typography className={classes.group5_Name}>bglobal</Typography>
      </Grid>
    </Grid>
    <Grid container className={classes.root} xs={12}>
      <Grid className={classes.group1}>
        <div className={classes.group1Elip}>
          <div className={classes.elip1}></div>
        </div>
        <div className={classes.textGroup}>
          <Typography className={classes.text1}>Chúng tôi coi trọng</Typography>
          <Typography className={classes.text2}>Văn hóa & tri thức</Typography>
          <Typography className={classes.text3}>
            BGlobaler luôn không ngừng học hỏi những kiến thức, công nghệ mới
            nhất và hoàn thiện bản thân
          </Typography>
        </div>
      </Grid>
      <Grid className={classes.group2}>
        <img src={img1} className={classes.img1} />
      </Grid>
      <Grid className={classes.group3}>
        <img src={img1} className={classes.img2} />
      </Grid>
      <Grid className={classes.group4}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </Grid>
      <Grid className={classes.group5}>
        <Typography className={classes.group5_Name}>bglobal</Typography>
      </Grid>
    </Grid>
    </div>
    
  );
}
