import { Fragment, useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import MainContent from './components/maincont/MainContent'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
 

  return (
    <Fragment >
      <div className='container'>
        <Header />
        <div className='divider'/>
        <Hero />
        <div className='divider'/>
        <MainContent />
        <div className='divider'/>
        <Contact />
        <div className='divider'/>
        <Footer />
      </div>
     
    </Fragment>
    
  )
}

export default App
