import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <>
      <Header title="Despesa 1" budget="150,200.00" />
      <div className='flex justify-between m-4'>
        <span>Remanescente</span>
        <span>200.00 MZN</span>
      </div>
      <Card/>
    </>
  )
}

export default App
