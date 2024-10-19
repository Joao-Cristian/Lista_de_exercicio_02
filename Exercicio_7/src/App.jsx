import './App.css'
import Titulo from './components/Titulo'
import Subtitulo from './components/Subtitulo'

function App() {
  const Title = "Bem vindo Usuario"//Insira o titulo de sua escolha  
  const Subtitle = "É um prazer ter você presente"//Insira o subtitulo de sua escolha
  return (
    <>
      <Titulo h1={Title}/>
      <Subtitulo h2={Subtitle}/>
    </>
  )
}

export default App