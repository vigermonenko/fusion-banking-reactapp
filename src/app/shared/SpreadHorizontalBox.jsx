import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

function SpreadHorizontalBox({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      {children}
    </div>
  );
}

SpreadHorizontalBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default SpreadHorizontalBox;
