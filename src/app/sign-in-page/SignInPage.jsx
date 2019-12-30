import React, { useEffect, useState } from 'react';
import WallpaperLayout from '../shared/WallpaperLayout';

import SignInCard from './SignInCard';
import * as backgroundImage from '../../assets/background-image.jpg';
import CenteredContainer from '../shared/CenteredContainer';
import FullScreen from '../shared/FullScreen';

function SignInPage() {
  const [credits, setCredits] = useState({ login: '', password: '' });

  function onSubmit() {
    console.log(credits);
  }

  useEffect(() => {
    document.title = 'Fusion | log in';
  }, []);

  return (
    <WallpaperLayout imageUrl={backgroundImage} alt="mac OS wallpaper">
      <FullScreen>
        <CenteredContainer>
          <SignInCard onCreditsChange={setCredits} onSubmit={onSubmit} />
        </CenteredContainer>
      </FullScreen>
    </WallpaperLayout>
  );
}

export default SignInPage;
