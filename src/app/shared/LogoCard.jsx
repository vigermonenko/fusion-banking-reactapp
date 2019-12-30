import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import HorizontalBox from './HorizontalBox';

const useStyles = makeStyles({
  card: {
    height: 40,
    width: 200,
    opacity: 0.92,
    marginBottom: 10,
  },
});

function LogoCard({ title }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <HorizontalBox>
        <Typography variant="h5">
          {title}
        </Typography>
      </HorizontalBox>
    </Card>
  );
}

LogoCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LogoCard;
