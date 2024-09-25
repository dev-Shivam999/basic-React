
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Product from './components/Product'

function App() {

  return (
   <>
   <h1 className='my-3'> Fake Store API</h1>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Product/:id' element={<Product/>} />
   </Routes>
   </>
  )
}

export default App
