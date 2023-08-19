import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <>
      <Header title="Despesa 1" budget="150,200.00" main/>
      <div className='flex justify-between m-4'>
        <span className='text-xl text-secondary-300 font-semibold'>Remanescente</span>
        <span className='text-secondary-200'>200.00 MZN</span>
      </div>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
