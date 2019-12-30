import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

function HorizontalBox({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      {children}
    </div>
  );
}

HorizontalBox.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HorizontalBox;
