// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const isAuthenticated = window.localStorage.getItem("isAuthenticated");

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (isAuthenticated) {
//           return <Component {...props} />;
//         } else {
//           return <Redirect to="/login" />;
//         }
//       }}
//     />
//   );
// };

// export default ProtectedRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  console.log('user: ', user);
  return (
    <Route {...rest} render={
      props => {
        if (user) {
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
