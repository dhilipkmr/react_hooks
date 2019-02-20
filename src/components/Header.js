import React from 'react';
import AuthContext from '../auth-context';

const header = props => {
  const authContext = React.useContext(AuthContext);

  return (<header>
    {authContext.status && <button onClick={props.onLoadTodos}>TodoList</button>}
    <button onClick={props.onLoadAuth}>Auth</button>
  </header>);
};
export default header;