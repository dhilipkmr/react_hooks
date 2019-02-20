import React, { useContext } from 'react';
import AuthContext from '../auth-context';
const auth = props => {
  const authContext = useContext(AuthContext);
  return (<header>
    <button onClick={authContext.login}>Login</button>
  </header>);
};
export default auth;