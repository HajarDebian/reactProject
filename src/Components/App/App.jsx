import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Home from '../Home/Home.jsx'
import Portfolio from '../Portfolio/Portfolio.jsx'
import About from '../About/About.jsx'
import Contact from '../Contact/Contact.jsx'
import NotFound from '../NotFound/NotFound.jsx'
import Footer from '../Footer/Footer.jsx'
import './App.module.css'
import { Routes,Route } from 'react-router-dom'

export default class App extends Component {
  state=
  {

  }
  render() {
    return (
      <>
        <Navbar/>
        <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='portfolio' element={<Portfolio/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
        </div>
      </>
    )
  }
}

