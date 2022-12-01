import { HiOutlineShoppingCart } from 'react-icons/hi';
import {Link} from 'react-router-dom'
import '../App.css';


const CartWidget = () =>{
    return(
        <>
        <span className='cartCounter' ></span>
        <Link to='/cart'><a><button><HiOutlineShoppingCart className='cart' /></button></a> </Link>
        </>
    )
}

export default CartWidget;