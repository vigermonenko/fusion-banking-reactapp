import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import SignInPage from './sign-in-page/SignInPage';
import SignUpPage from './sign-up-page/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignInPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
