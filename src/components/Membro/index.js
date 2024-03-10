import React, { Component } from "react";

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };

        this.entrar = this.entrar.bind(this);
        // this.sair = this.sair.bind(this);
    }

    entrar(usuario){
        this.setState({nome: usuario});
    }

    sair(){
        alert('Saiu');
    }


    /* Aula 39 sobre Eventos, do curso. 
       tem umas coisas complicadas no 9:00 min 
       desta aula. Favor, rever. */
    render(){
        return(
            <div>
                <h2>Logado como: {this.state.nome}</h2>
                <button onClick={ () => this.entrar('Lucas')}>Entrar como Matheus</button>
                <button onClick={ () => this.setState({nome: ''}) }>Sair</button>
            </div>
        );
    }
}

export default Membro;