import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

import Main from './components/main_component';

class App extends Component{

  constructor(props){
    super(props);
  }


  state = {

  }


  render(){
  return (
    <Router>
      {/* Somewhat needed */}
      <Route path="/" exact component={props => <Main/>}></Route>
    </Router>
    )
  }
}

export default App;
