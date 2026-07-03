
function Sidemenu(props){
    
   
    return(
    
<div id="sidemenu" className={props.name?"open":"none"}>
        <i id="close" onClick={()=>props.Host(false)} className="fa-solid fa-xmark"></i>
        <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </div>

  

    )
}
export default Sidemenu