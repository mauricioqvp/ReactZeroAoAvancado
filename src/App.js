
const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} fb={props.social} />
    </div>
  );
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá! Sou o {props.nome}</h2>
      <h3>Cargo: {props.cargo} </h3>
      <h3>Idade: {props.idade} </h3>
      <Social fb={props.fb} />
      <hr/>
    </div>
  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a><br/>
      <a href={props.fb}>LinkedIn</a>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Matheus" cargo="Programador" idade="29" social="https://google.com" />
    </div>
  );
}

export default App;
