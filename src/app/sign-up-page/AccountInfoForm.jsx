import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import makeStyles from '@material-ui/core/styles/makeStyles';

import SpreadVerticalBox from '../shared/SpreadVerticalBox';

const useStyles = makeStyles({
  form: {
    height: 300,
  },
  text: {
    width: 200,
  },
});

const defaultState = { login: '', password: '', repeatPassword: '' };

function AccountInfoForm({ onAccountInfoChange }) {
  const classes = useStyles();
  const [accountInfo, setAccountinfo] = useState(defaultState);

  function onLoginChange(event) {
    accountInfo.login = event.target.value;
    setAccountinfo(accountInfo);
    onAccountInfoChange(accountInfo);
  }

  function onPasswordChange(event) {
    accountInfo.password = event.target.value;
    setAccountinfo(accountInfo);
    onAccountInfoChange(accountInfo);
  }

  function onRepeatPasswordChange(event) {
    accountInfo.repeatPassword = event.target.value;
    setAccountinfo(accountInfo);
    onAccountInfoChange(accountInfo);
  }

  return (
    <FormControl className={classes.form}>
      <SpreadVerticalBox>
        <TextField label="Login" onChange={onLoginChange} className={classes.text} />
        <TextField label="Password" onChange={onPasswordChange} type="password" className={classes.text} />
        <TextField label="Repeat Password" onChange={onRepeatPasswordChange} type="password" className={classes.text} />
      </SpreadVerticalBox>
    </FormControl>
  );
}

AccountInfoForm.propTypes = {
  onAccountInfoChange: PropTypes.func.isRequired,
};

export default AccountInfoForm;
