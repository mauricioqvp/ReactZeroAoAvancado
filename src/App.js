import React, { Component } from "react";

class Equipe extends Component{
  render(){
    return(
      <div>
        <h2>Nome: {this.props.nome} </h2>
        <h3>Cargo: {this.props.cargo} </h3>
        <h3>Idade: {this.props.idade} </h3>
        <p>Aqui vai o .jsx</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Matheus" cargo="programador" idade="24" />
    </div>
  );
}

export default App;
