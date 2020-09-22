import React from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import nFound from "./image/notfound.png"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  NotFound: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  NotFoundNof: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: "center",
    marginBottom: "50px",
    marginTop: "36px",
    [theme.breakpoints.up("sm")]: {
      marginBottim: "96px",
    },
  },
  ImgNotFound: {
    width: "370px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    background: `url(${nFound})`,
    justifyContent: "center",
    height: "245px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      backgroundSize: "cover",
      width: "447px",
      height: "245px",
    },
  }
}));
export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.NotFound}>
        <Typography className={classes.NotFoundNof}>Không tìm thấy kết quả phù hợp. Vui lòng thử lại với từ khóa khác</Typography>
        <Grid item className={classes.ImgNotFound}>
        </Grid>
      </Grid>
    </div>
  )
}
