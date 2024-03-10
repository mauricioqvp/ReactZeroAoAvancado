import React, { Component } from "react";

class Listagem extends Component{

    render(props){
        return(
            <div key={props.item.id}>
                <strong>Usuário:</strong> {props.item.username}
                <p><strong>comentários:</strong> {props.item.comentarios} <strong>curtidas:</strong> {props.item.curtidas}</p>
            </div>
        );
    }
}

export default Listagem;