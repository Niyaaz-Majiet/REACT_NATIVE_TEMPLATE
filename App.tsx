import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {createRootNavigator} from './src/pages/router';
import {isSignedIn} from './src/pages/auth';


export default function App(): JSX.Element {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    
    isSignedIn()
      .then((res: any) => setLoggedIn(res))
      .catch((err: any) => alert('An error occurred'));
  }, []);

  return createRootNavigator(loggedIn, () => setLoggedIn(!loggedIn));
}