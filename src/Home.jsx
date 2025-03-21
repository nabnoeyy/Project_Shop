import React from "react"

import Navbar from "./assets/Component/Navbar"
import Pre from "./assets/Component/Pre"
import About from "./assets/Component/About"
import Footer from "./assets/Component/Footer"
import AlbumCard from "./assets/Component/AlbumCard"


function Home() {
    return(
        <>

        <Navbar />
        <Pre />
        <AlbumCard />
        <About />
        <Footer />

        </>
    )
   
}



export default Home