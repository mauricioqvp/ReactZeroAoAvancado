import React, { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      logado: false,
      usuario: 'Mauricio'
    }

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(){
    console.log('Entrou no sistema!');
    this.setState({logado: true});
  }

  sair(){
    console.log('Saiu do sistema!');
    this.setState({logado: false});
  }

  render(){
    return(
      <div>
        {this.state.logado ?
        <div>
          <h2>Seja bem vindo ao sistema sr. {this.state.usuario}</h2>
          <button onClick={this.sair}>Sair</button>
        </div>
          :
        <div>
          <h2>Você não está Logado</h2>
          <button onClick={this.entrar}>Entrar</button>
        </div>
        }
      </div>
    );
  }
}

export default App;
