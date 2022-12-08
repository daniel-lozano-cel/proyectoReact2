import CartContext from "./CartContext";
import { useContext} from "react";
import Checkout from "./Checkout";
const Cart = () => {

    const {cart} = useContext(CartContext)
    return(
        
        <>  
        {                
            cart.map((product) => 
            <div className='cartContainer' >
                <div className='box' >
                    <img src={product.pictureUrl} className='imageCart' ></img>
                    <div class='boxContent' >
                        <h2 key={product.key}>{product.title} </h2>  
                        <span>Price: ${product.price}</span> <br/>
                        <span>Quantity: {product.quantity}  </span> <br/>
                        <hr/>
                    </div>
                </div>     
            </div>
            )            
        }
        <Checkout/>
        </>
    )
}

export default Cart;
