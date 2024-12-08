
// import Header from "./components/Header"
// import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Subhero from "./components/Subhero"
import Products from "./components/Products"

import Slides from "./components/Slides"



export default function Home(){
    return(
        <div>
            {/* <Header/> */}
            <Hero/>
            <Subhero/>
            <Products/>
            
            <Slides/>
            {/* <Footer/> */}
            
            

        </div>
    )
}