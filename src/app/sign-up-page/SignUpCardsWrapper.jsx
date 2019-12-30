import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

import SpreadHorizontalBox from '../shared/SpreadHorizontalBox';
import AccountInfoCard from './AccountInfoCard';
import PersonalInfoCard from './PersonalInfoCard';
import SubmitCard from './SubmitCard';

const useStyles = makeStyles({
  wrapper: {
    width: 1200,
  },
});

function SignUpCardsWrapper({ onAccountInfoChange, onPersonalInfoChange, onSubmit }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <SpreadHorizontalBox>
        <AccountInfoCard onAccountInfoChange={() => {}} />
        <PersonalInfoCard onPersonalInfoChange={() => {}} />
        <SubmitCard onSubmit={() => {}} onAcceptTerms={() => {}} />
      </SpreadHorizontalBox>
    </div>
  );
}

SignUpCardsWrapper.propTypes = {
  onAccountInfoChange: PropTypes.func.isRequired,
  onPersonalInfoChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpCardsWrapper;
