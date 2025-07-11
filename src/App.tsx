import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import Paciente from './pages/paciente/paciente'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/paciente' element={<Paciente/>}/>
        </Route>
        <Route path='*' element={<Navigate to={'/home'}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
