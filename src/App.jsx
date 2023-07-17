
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'
import Login from './components/Login/Login'
import Nav from './components/Nav/Nav'
import Create from './components/Create/Create'
import { useState } from 'react';
import Home from './components/Home/Home'


function App() {
  let { pathname } = useLocation()

  let [ pagina, setPagina ] = useState(1)
  let [ porPagina ] = useState(12)

  return (
    <>
    {pathname != '/' && <Nav setPagina={setPagina}/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Cards pagina={pagina} setPagina={setPagina} porPagina={porPagina}/>}/>
      <Route path='/home/detail/:id' element={<Detail/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
    </>
  )
}

export default App
