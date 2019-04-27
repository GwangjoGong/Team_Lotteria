import React, {Component} from 'react';


var style = {
    width:"100%",
    
}
class Main extends Component{

  constructor(props){
    super(props);
  }


  state = {

  }

  


  render(){
  return (
      <div style={style} >
        <iframe
            id="myMap"
            width="100%"
            height={window.innerHeight}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBiVWpxtYlvfkrUsjiFmynKRxHUGABhKKA
            &q=KAIST&maptype=roadmap" allowfullscreen>
        </iframe>
      </div>
  )
  } 
}

export default Main;
