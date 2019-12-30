import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  box: {
    width: '100vw',
    height: '100vh',
  },
});

function FullScreen({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      {children}
    </div>
  );
}

FullScreen.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FullScreen;
