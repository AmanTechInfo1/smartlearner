// import React from 'react'


import Routers from "../Routes/Routers";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Navbar from "../component/Navbar/Navbar";

export default function Layouts() {
  return (
   <>
   <Navbar/>
   <Header/>
    <main>
       <Routers/>
    </main>

   <Footer/>   
   </>
      
    
  )
}
