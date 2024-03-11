import React, { Component } from "react";
import "./css/styles.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      form: {
        nome: 'Marcelo',
        email: 'teste@teste.com', 
        senha: '123',
        sexo: 'feminino',
        error: ''
      }
    }
    this.dadosForm = this.dadosForm.bind(this);
  }

  dadosForm(e){
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
  }

  render(){
    return(
    <div className="bloco">
      <h1>Novo usuário:</h1>
          Nome:
          <input type="text" name="nome" value={this.state.form.nome} 
            onChange={this.dadosForm} /> <br/>
          E-mail:
          <input type="text" name="email" value={this.state.form.email} 
            onChange={this.dadosForm} /> <br/>
          Senha:
          <input type="text" name="senha" value={this.state.form.senha}
            onChange={this.dadosForm} /> <br/>
          <select name="sexo" value={this.state.form.sexo} 
            onChange={this.dadosForm} >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        <div>
          <h3>{this.state.form.nome}</h3>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>
      </div>
    );
  }
}

export default App;
