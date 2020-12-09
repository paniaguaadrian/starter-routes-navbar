import * as React from "react";
import { Link } from "react-router-dom";

// * Material UI
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  Hidden,
} from "@material-ui/core";

// * Components
import SideDrawer from "./SideDrawer";

// * Stylesheets
import useStyles from "./styles";

const navLinks = [
  { title: `projects`, path: `/projects` },
  { title: `about me`, path: `/me` },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <Link to={"/"}>BreadAndWater</Link>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              <Link to={"/projects"} className={classes.linkText}>
                Projects
              </Link>
              <Link to={"/me"} className={classes.linkText}>
                About me
              </Link>
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
