import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  console.log('In App');

  return (
    <React.Fragment>
      <MainHeader />
      <main>{!ctx.isLoggedIn ? <Login /> : <Home />}</main>
    </React.Fragment>
  );
}

export default App;
