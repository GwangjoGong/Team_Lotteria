import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { AppContainer, Navigation, Body, Title } from "./containers";
import './App.css';
import {SideNav, Nav} from 'react-sidenav';

import Main from './components/main_component';
import Lost from './components/lost_component';
import Found from './components/found_component';
import AppNavigation from './components/navigation_component';



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
        <Body>
          <Switch>
            <Route path="/main" exact component={props => <Main/>}></Route>
            <Route path="/found" component={props=><Found/>}></Route>
            <Route path="/lost" component={props=><Lost/>}></Route>
          </Switch>
        </Body>
      </AppContainer>
      </Router>
    )
  }
}

export default App;
