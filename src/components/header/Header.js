import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AvTimer from 'material-ui-icons/AvTimer';
import Settings from 'material-ui-icons/Settings';
import colors from './../colors';

const styleSheet = createStyleSheet('Header', {
  root: {
    width: '100%',
  },
  bar: {
    height: 70,
  },
  title: {
    flex: 1,
    paddingTop: 14,
    fontSize: 36,
    fontWeight: 400,
    letterSpacing: 1.4,
  },
  settings: {
    paddingTop: 3,
    fontSize: 20,
    color: colors.lightestblueGrey,
    textTransform: 'capitalize',
  },
});

function Header(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <IconButton color="contrast" aria-label="Menu">
            <AvTimer color={colors.lightestblueGrey} />
          </IconButton>
          <Typography
            color="inherit"
            className={classes.title}
            gutterBottom
            align="center"
          >
            Time Table Generator
          </Typography>
          <Button>
            <Settings color={colors.lightestblueGrey} />
            <Typography
              color="reds"
              type="caption"
              className={classes.settings}
            >
              &nbsp;Settings
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Header);
