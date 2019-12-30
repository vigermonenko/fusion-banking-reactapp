import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

function SpreadVerticalBox({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      {children}
    </div>
  );
}

SpreadVerticalBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default SpreadVerticalBox;
