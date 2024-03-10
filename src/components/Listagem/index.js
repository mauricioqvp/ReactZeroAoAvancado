import React, { Component } from "react";

class Listagem extends Component{

    render(){
        return(
            <div>
                <p>Código: {this.props.cod}, Usuário: {this.props.user}, {this.props.curtidas} { this.props.curtidas > 1 ? 'curtidas' : 'curtida'}</p>
                <hr/>
            </div>
        );
    }
}

export default Listagem;