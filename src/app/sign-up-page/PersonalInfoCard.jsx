import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import makeStyles from '@material-ui/core/styles/makeStyles';

import LogoCard from '../shared/LogoCard';
import CenteredContainer from '../shared/CenteredContainer';
import PersonalInfoForm from './PersonalInfoForm';

const useStyles = makeStyles({
  card: {
    width: 350,
    height: 400,
    opacity: 0.92,
  },
});

function PersonalInfoCard({ onPersonalInfoChange }) {
  const classes = useStyles();

  return (
    <div>
      <LogoCard title="Personal Info" />
      <Card className={classes.card}>
        <CenteredContainer>
          <PersonalInfoForm onPersonalInfoChange={onPersonalInfoChange} />
        </CenteredContainer>
      </Card>
    </div>
  );
}

PersonalInfoCard.propTypes = {
  onPersonalInfoChange: PropTypes.func.isRequired,
};

export default PersonalInfoCard;
