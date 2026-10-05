import React from 'react'
import NavBar from '../Navbar/NavBar'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <>
        <NavBar />
        <main> {children} </main>
        <Footer />
    
    </>
  )
}

export default Layout