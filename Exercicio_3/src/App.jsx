import './App.css'

function Tarefa(props) {
  return <li>{ props.brand } Tarefa</li>;
}

function App() {
  const tarefas = [
    {id: 1, brand: 'Primeira'},
    {id: 2, brand: 'Segunda'},
    {id: 3, brand: 'Terceira'}
  ]; 
  return (
    <>
      <h1>Quantas tarefas tem?</h1>
	    <ul>
        {tarefas.map((tarefa) => <Tarefa key={tarefa.id} brand={tarefa.brand} />)}
      </ul>
    </>
  )
}


export default App
