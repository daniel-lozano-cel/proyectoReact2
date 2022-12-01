import { useContext } from 'react';
import { CartContext } from './CartContext';
import '../App.css'

const Cart = () =>{

    const test = useContext(CartContext)
    
    return(
        <>
            <h1>
                Cart
            </h1>
            {
                test.length === 0
                ? <span>The cart is empty</span>
                : test.map(item=>
                    <>
                        <img src={item.pictureUrl}></img>
                        <span>{item.title} - {item.qty} - {item.price}</span>
                    </>
                
                )
            }
        </>
    )
}
export default Cart;