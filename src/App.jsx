//import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element = {<HomePage/>} />
            <Route path='/forum' element = {<ForumPage/>} />
            <Route path='/about' element = {<AboutPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
