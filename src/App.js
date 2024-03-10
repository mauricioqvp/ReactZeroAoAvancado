import React, { Component } from "react";

class App extends Component{
  /* Configura um estado básico inicial */
  constructor(props){
    super(props);
    this.state ={
      hora: '00:00:00'
    };
  }

  /* Logo depois que o componente é criado */
componentDidMount(){
  setInterval(() => {
    this.setState({ hora: new Date().toLocaleTimeString() })  
  }, 1000);
}

componentDidUpdate(){
  console.log('Atualizou!!');
}

    render(){
      return(
        <div>
          <h3>Ciclo de Vida {this.state.hora} </h3>
        </div>
      );
    }
}

export default App;
