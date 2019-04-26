import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { AppContainer, Navigation, Body, Title } from "./containers";
import './App.css';
import {SideNav, Nav} from 'react-sidenav';

import Main from './components/main_component';
import AppNavigation from './components/navigation_component';
import { R_OK } from 'constants';

var style = {
  flex: "1"
}


class App extends Component{

  constructor(props){
    super(props);
  }


  state = {

  }


  render(){
  return (
    <Router>
    <AppContainer>
        <Navigation>
          <Title> TEAM LOTTERIA </Title>
          <AppNavigation />
        </Navigation>
        <Body style={style}>
          <Switch>
            <Route path="/" exact component={props => <Main/>}></Route>
          </Switch>
        </Body>
      </AppContainer>
      </Router>
    )
  }
}

export default App;
