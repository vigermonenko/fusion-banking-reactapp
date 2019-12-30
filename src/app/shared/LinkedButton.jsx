import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  button: {
    width: 150,
  },
});

function LinkedButton({ link, onClick, children }) {
  const classes = useStyles();

  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>
      <Button onClick={onClick} className={classes.button}>
        {children}
      </Button>
    </Link>
  );
}

LinkedButton.defaultProps = {
  onClick: () => {},
  children: 'button',
};

LinkedButton.propTypes = {
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default LinkedButton;
