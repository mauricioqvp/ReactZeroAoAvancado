import React, { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        nome: 'Marcelo',
        email: 'teste@teste.com', 
        senha: '123',
        error: ''
    }
    this.atualizaEmail = this.atualizaEmail.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  atualizaEmail(e){
    let novoEmail = e.target.value;
    this.setState({email: novoEmail});
  }

  cadastrar(event){
    const { nome, email, senha } = this.state;
    if(nome !== '' && email !== '' && senha !== ''){
      alert(`Nome: ${nome}\nE-mail: ${email}\nSenha: ${senha}`);
    }else{
      this.setState({error: 'Ops! Parece que está faltando algo!'});
    }
    event.preventDefault();
  }

  render(){
    return(<>
      <h1>Novo usuário:</h1>
      {(this.state.error && <p>{this.state.error}</p>)}
      <form onSubmit={this.cadastrar}>
          Nome:
          <input type="text" name="nome" value={this.state.nome} 
            onChange={(e) => this.setState({nome: e.target.value})} /> <br/>
          E-mail:
          <input type="text" name="email" value={this.state.email} 
            onChange={this.atualizaEmail} /> <br/>
          Senha:
          <input type="text" name="senha" value={this.state.senha}
            onChange={(e) => {this.setState({senha: e.target.value})}} /> <br/>
          <button type="submit">Cadastrar</button>
        </form>
        <div>
          <h3>{this.state.nome}</h3>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
        </div>
      </>
    );
  }
}

export default App;
