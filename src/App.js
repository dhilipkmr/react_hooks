import React, { useState } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

const App = (props) => {
  const [loadTodos, setLoadTodos] = useState(false);
  const [loadAuth, setloadAuth] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const onLoadTodos = () => {
    setLoadTodos(!loadTodos);
  }

  const onLoadAuth = () => {
    setloadAuth(!loadAuth);
  }

  const changeAuthStatus = () => {
    setLoginStatus(!loginStatus);
  }

  return (
    <AuthContext.Provider value={{ status: loginStatus, login: changeAuthStatus}}>
      <div className="App">
        {loadTodos && <Todo></Todo>}
        <h2 id="gg">{loginStatus.toString()}</h2>
        <Header onLoadAuth={onLoadAuth} onLoadTodos={onLoadTodos}/>
        {loadAuth && <Auth changeAuthStatus={changeAuthStatus}/>}
      </div>
    </AuthContext.Provider>
  );
  
}
export default App;
