import React, { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
        {id: 2, username: 'Lucas', curtidas: 63, comentarios: 21},
        {id: 3, username: 'Amanda', curtidas: 120, comentarios: 12}
      ]
    }
  }

  render(){
    return(
      <div>
        { this.state.feed.map((item) => {
          return(
            <div key={item.id}>
              <strong>Usuário:</strong> {item.username}
              <p><strong>comentários:</strong> {item.comentarios} <strong>curtidas:</strong> {item.curtidas}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
