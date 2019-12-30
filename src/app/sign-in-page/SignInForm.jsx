import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import SpreadVerticalBox from '../shared/SpreadVerticalBox';

const useStyles = makeStyles({
  form: {
    height: 300,
  },
  text: {
    width: 200,
  },
  button: {
    width: 150,
  },
});

function SignInForm({ onCreditsChange, onSubmit }) {
  const classes = useStyles();
  const [credits, setCredits] = useState({ login: '', password: '' });

  function onLoginChange(event) {
    const { value } = event.target;
    credits.login = value;
    setCredits(credits);
    onCreditsChange(credits);
  }

  function onPasswordChange(event) {
    const { value } = event.target;
    credits.password = value;
    setCredits(credits);
    onCreditsChange(credits);
  }

  return (
    <FormControl className={classes.form}>
      <SpreadVerticalBox>
        <TextField label="Login" onChange={onLoginChange} className={classes.text} />
        <TextField label="Password" onChange={onPasswordChange} type="password" className={classes.text} />
        <Button onClick={onSubmit} variant="contained" className={classes.button}>
          Sign In
        </Button>
      </SpreadVerticalBox>
    </FormControl>
  );
}

SignInForm.propTypes = {
  onCreditsChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
