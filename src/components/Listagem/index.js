import React, { Component } from "react";

class Listagem extends Component{

    render(props){
        return(
            <div>
                <strong>Usuário:</strong> {props.feed.id}
                <p><strong>comentários:</strong> ola <strong>curtidas:</strong> até</p>
            </div>
        );
    }
}

export default Listagem;