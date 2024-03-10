import React, { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: false
    };
}

    render(){
      return(
        <div>
          {this.state.status ? 
            <h2>Logado no sistema!</h2>
            :
            <h2>Por favor, faça seu Login</h2>
          }
          <div>
            <h2>Bem vindo</h2>
          </div>
        </div>
      );
    }
}

export default App;
