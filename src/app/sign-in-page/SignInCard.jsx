import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CenteredContainer from '../shared/CenteredContainer';
import SignInForm from './SignInForm';
import LogoCard from '../shared/LogoCard';
import LinkedButton from '../shared/LinkedButton';

const useStyles = makeStyles({
  card: {
    width: 350,
    height: 400,
    opacity: 0.92,
  },
});

function SignInCard({ onCreditsChange, onSubmit }) {
  const classes = useStyles();

  return (
    <div>
      <LogoCard title="Sign In" />
      <Card className={classes.card}>
        <CenteredContainer>
          <SignInForm onCreditsChange={onCreditsChange} onSubmit={onSubmit} />
        </CenteredContainer>
      </Card>
    </div>
  );
}

SignInCard.propTypes = {
  onCreditsChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignInCard;
