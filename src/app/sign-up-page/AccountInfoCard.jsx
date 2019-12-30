import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import makeStyles from '@material-ui/core/styles/makeStyles';

import LogoCard from '../shared/LogoCard';
import CenteredContainer from '../shared/CenteredContainer';
import AccountInfoForm from './AccountInfoForm';

const useStyles = makeStyles({
  card: {
    width: 350,
    height: 400,
    opacity: 0.92,
  },
});

function AccountInfoCard({ onAccountInfoChange }) {
  const classes = useStyles();

  return (
    <div>
      <LogoCard title="Account Info" />
      <Card className={classes.card}>
        <CenteredContainer>
          <AccountInfoForm onAccountInfoChange={onAccountInfoChange} />
        </CenteredContainer>
      </Card>
    </div>
  );
}

AccountInfoCard.propTypes = {
  onAccountInfoChange: PropTypes.func.isRequired,
};

export default AccountInfoCard;
