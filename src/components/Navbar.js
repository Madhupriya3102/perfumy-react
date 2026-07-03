

function Navbar(props){
return(<>
    <nav>
      <h1>Perfumy</h1>
      <ul id="ul">
        <li>Home |</li>
        <li>Products |</li>
        <li>About |</li>
        <li>Contact |</li>
      </ul>
    
    <i id="bars" onClick={()=>props.Host(true)} className="fa-solid fa-bars"></i>

    </nav>
      </>

  
  )
}

export default Navbar