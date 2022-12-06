import { HiOutlineShoppingCart } from 'react-icons/hi';
import {Link} from 'react-router-dom'
import '../App.css';
import { useContext } from 'react';
import CartContext from './CartContext';


const CartWidget = () =>{

    const {cartItems} = useContext(CartContext)

    return(
        <>
        <CartContext.Provider value={{cart, addItem, isInCart}} className='cartCounter' />
        <Link to='/cart'><a><button><HiOutlineShoppingCart className='cart' /></button></a> </Link>
        </>
    )
}

export default CartWidget;