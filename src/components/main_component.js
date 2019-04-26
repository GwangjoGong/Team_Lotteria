import React, {Component} from 'react';

class Main extends Component{

  constructor(props){
    super(props);
  }


  state = {

  }


  render(){
  return (
      <div>
        <iframe
            id="myMap"
            width={window.innerWidth}
            height={window.innerHeight}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBiVWpxtYlvfkrUsjiFmynKRxHUGABhKKA
            &q=Space+Needle,Seattle+WA&maptype=roadmap" allowfullscreen>
        </iframe>
      </div>
  )
  }
}

export default Main;
