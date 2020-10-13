import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./image/Logo.png";
import Path from "./image/Path.png";
import Menu from "./image/menu.png";
import Group from "./image/Group 674.png";
const drawerWidth = 225;

const useStyles = makeStyles((theme) => ({

  appBar: {
    [theme.breakpoints.up("sm")]: {},
    background: "none",
    height: "60px",
    boxShadow: "none",
    background: "linear-gradient(90deg, #5D38E6 0%, #2644EB 100%)",
  },
  toolBar: {
    background: "linear-gradient(90deg, #5D38E6 0%, #2644EB 100%)",
    display: "flex",
    justifyContent: "space-between",
    flexGrow: "1",
    alignItems: "center",
    paddingLeft: "12px",
    paddingRight: "12px",
    [theme.breakpoints.up("sm")]: {
      width: "580px",
      margin: "auto",
      minHeight: "60px",
      padding: "0",
    },
    [theme.breakpoints.up("md")]: {
      width: "920px",
      margin: "auto",
      minHeight: "60px",
      padding: "0",
    },
    [theme.breakpoints.up("lg")]: {
      width: "1280px",
      margin: "auto",
      minHeight: "60px",
      padding: "0",
    },
  },
  menuButton: {
    paddingRight: "11px",
    marginRight: "0",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: "264px",
    marginTop: "60px",
  },
  linkIcon: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  toolBar__right: {
    display: "flex",
    height: "60px",
  },
  toolBar__right__item: {
    display: "flex",
    alignItems: "center",
    marginRight: "30px",
    
    [theme.breakpoints.up("sm")]: {
      marginRight: "0",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "0",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "0",
    },
  },
  langName: {
    alignItems: "center",
    fontSize: "14px",
    marginRight: "10px",
  },
  btn__dropdown: {
    padding: "0",
  },
  pageLinkList: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  pageLinkItem: {
    paddingRight: "18px",
    paddingLeft: "18px",
    "&:hover": {
      textDecoration: "none",
    },
  },

  pageName: {
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "14px",
    "&:hover": {
      borderBottom: "1.5px solid #24BDC7",
      cursor: "pointer",
    },
  },
  groupMenu: {
    height: "28px",
    width: "201px",
  },
  drawerItemPage : {
    "&:hover": {
      background: "#24BDC7",
    },
  },
  drawerListPageName: {
    textTransform: "uppercase",
    color: "#3F3F3F",
    
  },
  menuListLang: {
    height: "124px",
    width: "225px",
    paddingLeft: "12px",
    paddingRight: "12px",
    alignItems: "center",
    marginTop: "27px"
  },
  menuItemLang: {
    height: "50px",
    "&:hover": {
      background: "#24BDC7",
    },
  },
}));

function RDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    setOpen(false);
  };
  const drawer = (
    <div>
      <List className={classes.drawerListPage}>
        <ListItem>
          <img src={Group} className={classes.groupMenu} alt="groupMenu" />
        </ListItem>
        {["giới thiệu", "chúng tôi", "tin tức", "liên hệ"].map(
          (text, index) => (
            <ListItem button key={text} className={classes.drawerItemPage} >
              <ListItemText
                primary={text}
                className={classes.drawerListPageName}
              />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Link className={classes.linkIcon}>
            <img src={Logo} alt="BGlobal"></img>
          </Link>
          <div className={classes.pageLinkList}>
            {["giới thiệu", "chúng tôi", "tin tức", "liên hệ"].map(
              (text, index) => (
                <Link button key={text} className={classes.pageLinkItem}>
                  <Typography className={classes.pageName}>{text}</Typography>
                </Link>
              )
            )}
          </div>
          <div className={classes.toolBar__right}>
            <div className={classes.toolBar__right__item}>
              <Typography className={classes.langName}>VI</Typography>

              <IconButton
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.btn__dropdown}
                ref={anchorRef}
              >
                <img src={Path} alt="" />
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      className={classes.menuListLang}
                    >
                      <MenuItem
                        onClick={handleClose}
                        className={classes.menuItemLang}
                      >
                        Tiếng Việt
                      </MenuItem>
                      <MenuItem
                        onClick={handleClose}
                        className={classes.menuItemLang}
                      >
                        English
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Popper>
            </div>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <img src={Menu} alt="" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

RDrawer.propTypes = {
  window: PropTypes.func,
};

export default RDrawer;
