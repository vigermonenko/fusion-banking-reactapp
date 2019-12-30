import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import SpreadVerticalBox from '../shared/SpreadVerticalBox';
import VerticalBox from '../shared/VerticalBox';
import HorizontalBox from '../shared/HorizontalBox';
import LogoCard from '../shared/LogoCard';
import LinkedButton from '../shared/LinkedButton';

const useStyles = makeStyles({
  button: {
    width: 150,
  },
  card: {
    width: 350,
    height: 400,
    opacity: 0.92,
  },
  wrapper: {
    height: 200,
  },
  box: {
    height: 50,
  },
});

function SubmitCard({ onSubmit, onAcceptTerms }) {
  const classes = useStyles();
  const [checked, setChecked] = useState();

  function onCheck(event) {
    setChecked(event.target.checked);
    onAcceptTerms(event.target.checked);
  }

  return (
    <div>
      <LogoCard title="Confirm" />
      <Card className={classes.card}>
        <VerticalBox>
          <div className={classes.wrapper}>
            <SpreadVerticalBox>
              <div className={classes.box}>
                <HorizontalBox>
                  <Checkbox onChange={onCheck} inputProps={{ 'aria-label': 'accept terms checkbox' }} />
                  <Typography>I accept terms of use.</Typography>
                </HorizontalBox>
              </div>
              <Button onClick={onSubmit} variant="contained" className={classes.button}>
                Sign Up
              </Button>
              <LinkedButton link="/signin">
                Sign in
              </LinkedButton>
            </SpreadVerticalBox>
          </div>
        </VerticalBox>
      </Card>
    </div>
  );
}

SubmitCard.propTypes = {
  onAcceptTerms: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SubmitCard;
