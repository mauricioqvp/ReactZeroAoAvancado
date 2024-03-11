import React, { Component } from "react";
<<<<<<< HEAD
import Listagem from './components/Listagem'
// https://youtu.be/gcOhd8rvBOc?si=ycQoFsnGbywfwUu4
// Video sobre Git Merge - muito bom
import "./css/styles.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI';
    }else{
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = 'PAUSA';
    }

    this.setState(state);
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state);
  }
  
  componentDidMount(){
    console.log('oi');
  }

=======

class App extends Component{

>>>>>>> 44cc72217da4d195d0d5ea7165dd41fe31012a4d
  render(){
    return(
<<<<<<< HEAD
      <div>
<<<<<<< HEAD
        oi
            <Listagem dados="{this.state.feed}"/>
=======
    <div className="container">
      <img src={require('./assets/cronometro.png')} className="img" />
      <a className="timer" >{this.state.numero.toFixed(1)}</a>
      <div className="areaBtn" >
        <a className="botao" onClick={this.vai}>{this.state.botao}</a>
        <a className="botao" onClick={this.limpar}>LIMPAR</a>
>>>>>>> novabranch
=======
        <h1>Olá</h1>
        <div className="texto_basico">Oi</div>
>>>>>>> 44cc72217da4d195d0d5ea7165dd41fe31012a4d
      </div>
    </div>
    );
  }
}

export default App;
