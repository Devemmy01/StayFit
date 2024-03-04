import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail /> } />
      </Routes>
      <Footer />
    </div>
  )
}  

export default App