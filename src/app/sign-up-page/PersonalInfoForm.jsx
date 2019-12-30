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

const defaultState = { firstName: '', lastName: '', email: '' };

function PersonalInfoForm({ onPersonalInfoChange }) {
  const classes = useStyles();
  const [accountInfo, setAccountinfo] = useState(defaultState);

  function onFirstName(event) {
    accountInfo.firstName = event.target.value;
    setAccountinfo(accountInfo);
    onPersonalInfoChange(accountInfo);
  }

  function onLastName(event) {
    accountInfo.lastName = event.target.value;
    setAccountinfo(accountInfo);
    onPersonalInfoChange(accountInfo);
  }

  function onEmailChange(event) {
    accountInfo.email = event.target.value;
    setAccountinfo(accountInfo);
    onPersonalInfoChange(accountInfo);
  }

  return (
    <FormControl className={classes.form}>
      <SpreadVerticalBox>
        <TextField label="First Name" onChange={onFirstName} className={classes.text} />
        <TextField label="Last Name" onChange={onLastName} type="password" className={classes.text} />
        <TextField label="Email" onChange={onEmailChange} className={classes.text} />
      </SpreadVerticalBox>
    </FormControl>
  );
}

PersonalInfoForm.propTypes = {
  onPersonalInfoChange: PropTypes.func.isRequired,
};

export default PersonalInfoForm;
