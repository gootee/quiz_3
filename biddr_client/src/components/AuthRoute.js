import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = props => {
  const {
    isAuthenticated = false,
    render,
    component: Component,
    ...restProps
  } = props;
  // The 'Component' variable comes as a prop that is assigned
  // a React component function. In the JSX below, we use to render
  // whatever component might be passed as a prop

  // Taking the remaining props (i.e. '{...restProps}') to a
  // React element that is being rendered is referred to as
  // 'forwarding props.' Doing this will allow us to immediately
  // share all props to our own component with rendered (e.g. onClick,
  // className, onSubmit, href, etc.)
  return (
    <Route
      {...restProps}
      render={routeProps => {
        if (isAuthenticated) {
          // You can use any variable that is assigned a component
          // function and render using JSX as follows:
          //   if (typeof render === "function") {
          //     return render(routeProps);
          //   } else {
          return <Component {...routeProps} />;
          //   }
        } else {
          return <Redirect to="/sign_in" />;
        }
      }}
    />
  );
};

export default AuthRoute;