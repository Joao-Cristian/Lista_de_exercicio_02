import './App.css'
import Paragrafo from './components/Paragrafo'

function App() {
    const textoEscolhido = "Insira seu texto" //Digite o texto de sua preferência 
  return (
    <>
      <Paragrafo paragrafo={textoEscolhido}/>
    </>
  )
}

export default App
