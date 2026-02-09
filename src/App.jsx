import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import About from '../pages/About'



import Homepage from '../pages/HomePage'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Error404 from '../pages/Error404'
import ContactPage from '../pages/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route exact path='signup' element={<Signup/>} />
      <Route exact path='signin' element={<Signin/>} />
      <Route exact path='*' element={<Error404/>}/>
      <Route exact path='about' element={ <About/>} />
      <Route exact path='/contact' element={ <ContactPage/>}/>
   </Routes>
  )
}

export default App