import Navbar from "./components/Navbar"
import Search from "./components/search"
import Product from "./components/product"
import About from "./components/about"
import Footer from "./components/footer"
import Sidemenu from "./components/sidemenu"
import {useState} from "react"
function App(props){
     const [sm,Setbar]=useState(false)
    
return(<>
<Navbar name={sm} Host={Setbar}/>
<Sidemenu name={sm} Host={Setbar}/>
    <div>
        
    <Search></Search>
    <Product></Product>
    <About></About>
    <Footer></Footer>
  
    </div>
   


    </>
)
}
export default App
