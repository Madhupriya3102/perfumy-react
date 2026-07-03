import one from "../images/two.jpg"
import two from "../images/one.jpg"
import three from "../images/three.jpg"



//product
function Product(){
  return(
    <div className="container">
        <div class="product">
        <img src={one} alt="one"/>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
          <button>Buy now</button>
</div> 
<div className="product">
        <img src={two} alt="two"/>
          <p>EVA Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
          <button>Buy now</button>
</div>
<div className="product">
        <img src={three} alt="three"/>
          <p> Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
          <button>Buy now</button>
</div>
</div>
  )
}
export default Product