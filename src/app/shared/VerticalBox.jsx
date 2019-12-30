import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

function VerticalBox({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      {children}
    </div>
  );
}

VerticalBox.propTypes = {
  children: PropTypes.element.isRequired,
};

export default VerticalBox;
