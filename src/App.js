import React, { Component } from "react";
import Listagem from './components/Listagem'

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

  render(){
    return(
      <div>
            <Listagem dados="{this.state.feed}"/>
      </div>
    );
  }
}

export default App;
