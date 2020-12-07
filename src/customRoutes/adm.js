import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';

// import { Container } from './styles';

function CustomRoutes({token, user, component: Component, ...rest}) {
  return (
    <Route {...rest}
      render={props => {
        if ((token || localStorage.getItem("token")) && user == 1){
          return <Component {...props}/>
        } else {
          return <Redirect to={{
            pathname: "/",
            state: {
              from: props.location
            }
          }}/>
        }
      }}
      />
  );
}

export default connect(state => ({token: state.header,user: state.user_type}))(CustomRoutes);