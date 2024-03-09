
const BomDia = (props) => {
  return(
    <h1>Bom dia, {props.name} !</h1>
  );
}

function App() {
  return (
    <div>
      <BomDia name="Maurício" />
      <h2>Curso React</h2>
      <p>Este é um teste de React.</p>
      Teste de escrita.
    </div>
  );
}

export default App;
