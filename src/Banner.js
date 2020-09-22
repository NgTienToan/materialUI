import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import World from "./image/world.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "60px",
    background: "linear-gradient(90deg, #5D38E6 0%, #2644EB 100%)",
  },
  categoryContainer: {
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `url(${World})`,
    justifyContent: "center",
    height: "380px",
    alignItems: "center",
  },
  containerItem: {
    justifyContent: "center",
  },
  titleh1: {
    fontSize: "48px",
    color: "#ffffff",
    fontWeight: "700",
    lineHeight: "60px",
    textAlign: "center",
  },
  titleh2: {
    fontSize: "16px",
    color: "#ffffff",
    fontWeight: "500",
    lineHeight: "24px",
    textAlign: "center",
  },
}));
export default function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.categoryContainer}>
        <Grid item className={classes.containerItem}>
          <Typography className={classes.titleh1}>Tin tức</Typography>
          <Typography className={classes.titleh2}>
            BGlobal luôn cập nhật những thông tin, những xu thế công nghệ mới
            nhất để phát triển và tối ưu các sản phẩm của mình
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
