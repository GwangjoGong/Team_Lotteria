import React, {Component} from 'react';
import Button from '@material-ui/core/Button'

var style = {
    width : "100%",
    height : "100%"
}


class Lost extends Component{

  constructor(props){
    super(props);
  }


  state = {

  }


  render(){
  return (
      <div style= {style}>
        <div className="row">
            LOST
        </div>
        <div align="right" style={{padding:"10px"}}>
            <Button variant="contained" color="primary">
                New Lost
            </Button>
        </div>
      </div>
  )
  } 
}

export default Lost;
