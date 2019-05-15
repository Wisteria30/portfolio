import React from 'react';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom"
import TextFiled from "./Profile";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { unstable_Box as Box } from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxOutlined from '@material-ui/icons/AccountBoxOutlined'
import InsertInvitation from '@material-ui/icons/InsertInvitation'
import Star from '@material-ui/icons/Star'
import SettingsPower from '@material-ui/icons/SettingsPower'
import WorksCard from "./Works";
import Skill from "./Skill";
import Top from "./Top";
// import { sizing } from '@material-ui/system';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // background: "#F44336",
    background: "#FFA000",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-front',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  top: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
});

class App extends React.Component {
  state = {
    open: false,
    color: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleClickTop = () => {
    this.setState({ color: true, open: false });
  };

  handleClickElse = () => {
    this.setState({ color: false, open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    const { color } = this.state;

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Box height={100}>
          <Box height="100%">
            <div className={classes.root}>
              <CssBaseline />
              <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: open,
                })}
              >
                <Toolbar disableGutters={!open}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h5" color="inherit" noWrap>
                    Portfolio
            </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <List>
                  <Link to="/" onClick={this.handleClickTop}>
                    <ListItem button key={"Top"}>
                      <ListItemIcon><Star /></ListItemIcon>
                      <ListItemText primary={"Top"} />
                    </ListItem>
                  </Link>
                  <Link to="/profile" onClick={this.handleClickElse}>
                    <ListItem button key={"Profile"}>
                      <ListItemIcon><AccountBoxOutlined /></ListItemIcon>
                      <ListItemText primary={"Profile"} />
                    </ListItem>
                  </Link>
                  <Link to="/works" onClick={this.handleClickElse}>
                    <ListItem button key={"Works"}>
                      <ListItemIcon><InsertInvitation /></ListItemIcon>
                      <ListItemText primary={"Works"} />
                    </ListItem>
                  </Link>
                  <Link to="/skill" onClick={this.handleClickElse}>
                    <ListItem button key={"Skill"}>
                      <ListItemIcon><SettingsPower /></ListItemIcon>
                      <ListItemText primary={"Skill"} />
                    </ListItem>
                  </Link>
                </List>
              </Drawer>
              <main
                className={classNames(classes.content, {
                  [classes.contentShift]: open, [classes.top]: color,
                })} onClick={this.handleDrawerClose}
              >
                {/* <div className={classes.drawerHeader} /> */}
                <Switch>
                  <Route exact path='/' component={Top} />
                  <Route exact path="/profile" component={TextFiled} />
                  <Route exact path="/works" component={WorksCard} />
                  <Route exact path="/skill" component={Skill} />
                  <Route component={Top} />
                </Switch>
              </main>
            </div>
            {/* // </Box> */}
          </Box>
        </Box>
      </BrowserRouter>
    );
  }
}

// const ChangeColor = withRouter(
//   ({history}) =>
//     history
// )

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);