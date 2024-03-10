import React, { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: 1
    };
}

    render(){
      return(
        <div>
          {this.state.status === 1 &&
            <h2>Logado no sistema!</h2>
          }
          <div>
            <h2>Bem vindo</h2>
          </div>
        </div>
      );
    }
}

export default App;
