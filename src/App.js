import React, { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        email: 'teste@teste.com', 
        senha: '123',
        sexo: 'Masculino'
    }
    this.atualizaEmail = this.atualizaEmail.bind(this);
    this.atualizaSexo = this.atualizaSexo.bind(this);
  }

  atualizaEmail(e){
    let novoEmail = e.target.value;
    this.setState({email: novoEmail});
  }

  atualizaSexo(e){
    let novoSexo = e.target.value;
    this.setState({sexo: novoSexo});
  }

  render(){
    return(
      <>
        E-mail:
        <input type="text" name="email" value={this.state.email} 
          onChange={this.atualizaEmail} /> <br/>
        Senha:
        <input type="text" name="senha" value={this.state.senha}
          onChange={(e) => {this.setState({senha: e.target.value})}} /> <br/>
        <select name="sexo" value={this.state.sexo} onChange={this.atualizaSexo}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </>
    );
  }
}

export default App;
