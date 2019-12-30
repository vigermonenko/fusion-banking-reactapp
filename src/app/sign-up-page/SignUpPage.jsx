import React from 'react';
import PropTypes from 'prop-types';
import * as backgroundImage from '../../assets/background-image.jpg';
import FullScreen from '../shared/FullScreen';
import CenteredContainer from '../shared/CenteredContainer';
import WallpaperLayout from '../shared/WallpaperLayout';
import SignUpCardsWrapper from './SignUpCardsWrapper';

function SignUpPage() {
  return (
    <WallpaperLayout imageUrl={backgroundImage} alt="mac OS wallpaper">
      <FullScreen>
        <CenteredContainer>
          <SignUpCardsWrapper />
        </CenteredContainer>
      </FullScreen>
    </WallpaperLayout>
  );
}

export default SignUpPage;
