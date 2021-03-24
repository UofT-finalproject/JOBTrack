import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStoreContext } from "./utils/GlobalState";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [state, dispatch] = useStoreContext();
  console.log('state', state);
  return (
    <Route {...rest} render={
      props => {
        if (state.isAuthenticated) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/unauthorized',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;
