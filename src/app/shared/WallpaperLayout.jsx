import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  outerWrapper: {
    height: '100%',
    width: '100%',
  },
  wrapper: {
    position: 'fixed',
    overflow: 'hidden',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    objectFir: 'cover',
  },
});

function WallpaperLayout({ children, imageUrl, alt }) {
  const classes = useStyles();

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.wrapper}>
        <img src={imageUrl} alt={alt} className={classes.image} />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

WallpaperLayout.defaultProps = {
  alt: 'Background image',
};

WallpaperLayout.propTypes = {
  children: PropTypes.element.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default WallpaperLayout;
