import React, { Component } from "react";
import Listagem from './components/Listagem'
// https://youtu.be/gcOhd8rvBOc?si=ycQoFsnGbywfwUu4
// Video sobre Git Merge - muito bom

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
        {id: 2, username: 'Lucas', curtidas: 63, comentarios: 21},
        {id: 3, username: 'Amanda', curtidas: 120, comentarios: 12}
      ]
    }
  }
  
  componentDidMount(){
    console.log('oi');
  }

  render(){
    return(
      <div>
        oi
            <Listagem dados="{this.state.feed}"/>
      </div>
    );
  }
}

export default App;
