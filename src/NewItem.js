import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img1 from "./image/img1.jpg";

const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 270,
    boxShadow: "none",
    borderRadius: "0",
    marginTop: "24px",
    [theme.breakpoints.up("sm")]: {
      margin: "0",
      borderRadius: "4px",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0",
      maxWidth: 395,
      borderRadius: "4px",
    },
  },
  cardContent: {
    paddingLeft: "0",
    paddingRight: "0",
  },
  media: {
    height: 260,
  },
  timeNew: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "500",
    color: "#6C7078"
  },
  titleNew: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "600",
    color: "#3B404C"
  },
  btnNewForm: {
    padding: "0",
  },
  btnNew: {
    color: "#24BDC7",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    textTransform: "none",
    padding: "0"
  }
}));

export default function NewItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root} xs={12} sm={4} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img1}
          title="Contemplative Reptile"
        />
        <CardContent
          className={classes.cardContent}
        >
          <Typography gutterBottom className={classes.timeNew}>18 tháng 3, 2020</Typography>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleNew}>
            Tuyển dụng: UI/UX Designer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Mô tả công việc - Nghiên cứu, tìm hiểu, phân tích hành vi người
            dùng, đề xuất phương án cho giao diện người dùng, trải nghiệm người
            dùng
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnNewForm}> 
        <Button className={classes.btnNew}>
          Xem chi tiết
        </Button>
      </CardActions>
    </Card>
  );
}
