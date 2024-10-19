import './App.css'
import DiaNoite from './components/DiaNoite'

function App() {
  const Boolean = true // Mude para verdadeiro "true" ou falso "false"
  return (
    <>
      <DiaNoite prop={Boolean}/>
    </>
  )
}

export default App
