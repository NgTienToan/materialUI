import React from "react";
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
import img1 from "../image/thum.png";

const useStyles = makeStyles((theme) => ({
  newDeatilLeft: {

  },
  NewDetailTitle: {

  },
  Title: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "600",
    color: "#3B404C"
  },
  newDetailInfo: {
    display: "grid",
    gridTemplateColumns: "auto auto ",
    marginTop: "14px"
  },
  newDetailInfoItem: {
    display: "flex",
    alignItems: "center",
    color: "#6C7078",
    MuiTypographyBody1 : {
      fontSize: "14px"
    }
  },
  newDetailThumnail: {
    backgroundImage: `url(${img1})`,
    minWidth: "352px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent: "center",
    height: "260px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "400px",

    },
    [theme.breakpoints.up("md")]: {
      height: "540px",
      width: "792px"

    },
  },
  newDeatailDescription: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "500",
    color: "#6C7078"
  },
  Divider: {
    height: "1px",
    marginTop: "36px",
    color: "#6C7078"

  },
  IconBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#24BDC7",
    marginTop: "14px"
  },
  IconBottomItem: {
    display: "flex",
    alignItems: "center",
    color: "#24BDC7"
  }
}));
export default function NewDetailLeft() {
  const classes = useStyles();
  return (
    <Grid container xs={12} sm={12} className={classes.newDeatilLeft}>
          <Grid item className={classes.NewDetailTitle} xs={12} >
            <Typography className={classes.Title}>
              Tuyển dụng UI/UX designer
            </Typography>
            <Typography className={classes.Title}>
              (Lương tới $700)
            </Typography>
          </Grid>
          <Grid item className={classes.newDetailInfo} xs={12}>
            <div className={classes.newDetailInfoItem}>
              <IconButton>
                <DateRangeIcon />
              </IconButton>
              <Typography style={{fontSize: "14px"}}>20 tháng 7, 2020</Typography>
            </div>
            <div className={classes.newDetailInfoItem}>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <Typography style={{fontSize: "14px"}}>24 thích</Typography>
            </div>
            <div className={classes.newDetailInfoItem}>
              <IconButton>
                <VisibilityIcon />
              </IconButton>
              <Typography style={{fontSize: "14px"}}>450 lượt xem</Typography>
            </div>
            <div className={classes.newDetailInfoItem}>
              <IconButton>
                <ShareIcon />
              </IconButton>
              <Typography style={{fontSize: "14px"}}>14 lượt chia sẻ</Typography>
            </div>
          </Grid>
          <Grid item className={classes.newDetailThumnail} xs={12}></Grid>
          <Grid item className={classes.newDeatailDescription} xs={12}>
            <Typography>
              Mô tả công việc Công ty CP bGlobal là công ty FDI có vốn đầu tư từ
              Nhật. Hiện công ty đang phát triển các sản phẩm hỗ trợ kinh doanh
              nhà hàng và email marketing từ Nhật Bản. Công ty đang có nhu cầu
              tuyển nhân sự fulltime về IT với vị trí cụ thể sau: UI/UX DESIGNER
              (LƯƠNG: UP TO 15tr) Số lượng: 1. Mô tả công việc - Nghiên cứu, tìm
              hiểu, phân tích hành vi người dùng, đề xuất phương án cho giao
              diện người dùng, trải nghiệm người dùng trên các ứng dụng trên web
              và mobile. - Định hướng phát triển sản phẩm trong dự án mới của
              công ty, chịu trách nhiệm UX/UI của các sản phẩm Web/Mobile. -
              Trao đổi ý tưởng thiết kế thông qua các công cụ như storyboards,
              sitemaps, wireframes, flowcharts, prototypes... - Thiết kế UI/UX
              Website và App theo tiêu chí: sáng tạo, thân thiện với người dùng,
              tạo sự khác biệt. Yêu cầu công việc - Tốt nghiệp đại học/cao đẳng,
              ưu tiên các chuyên ngành thiết kế đồ hoạ, ưu tiên có chứng chỉ đồ
              họa. - Tối thiểu 1 năm kinh nghiệm trong lĩnh vực thiết kế UI/UX
              cho các ứng dụng web hoặc mobile. - Sử dụng được các công cụ:
              Sketch, Photoshop,... - Quen thuộc với các công vụ hỗ trợ UI/UX
              như Zeplin. - Kỹ năng làm việc nhóm, kỹ năng nghiên cứu và tổng
              hợp, thuyết trình. - Tính cách năng động, cầu tiến. QUYỀN LỢI: -
              Tăng lương theo lộ trình và các khoản thưởng theo kết quả công
              việc. - Hưởng toàn bộ quyền lợi theo quy định công ty, nghỉ theo
              chế độ quy định của nhà nước.. - Các chế độ BHYT, BHXH, BHTN theo
              quy định của nhà nước. - Sau 2 tháng thử việc, sẽ được đóng BHXH
              khi ký hợp đồng chính thức. - Môi trường làm việc thân thiện, năng
              động. - Được tiếp cận sâu các hệ thống thương mại lớn, sử dụng
              công nghệ hiện đại. - Được tạo điều kiện để nâng cao kiến thức
              chuyển môn, kỹ năng làm việc.
            </Typography>
          </Grid>
          <Divider
            className={classes.Divider}
          />
          <Grid item className={classes.IconBottom} xs={12}>
            <div className={classes.IconBottomItem}>
              <IconButton>
                <ArrowBackIcon  style={{ color: "#24BDC7" }}/>
              </IconButton>
              <Typography style={{fontSize: "14px"}}>Quay lại</Typography>
            </div>
            <div className={classes.IconBottomItem}>
              <IconButton>
                <FavoriteIcon style={{ color: "#24BDC7" }} />
              </IconButton>
              <Typography style={{fontSize: "14px"}}>Yêu thích</Typography>
            </div>
            <div className={classes.IconBottomItem}>
              <IconButton>
                <ShareIcon  style={{ color: "#24BDC7" }} />
              </IconButton>
              <Typography style={{fontSize: "14px"}} >Chia sẻ</Typography>
            </div>
          </Grid>
        </Grid>
  )
}
