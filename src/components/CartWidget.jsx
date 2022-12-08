import { HiOutlineShoppingCart } from 'react-icons/hi';
import {Link} from 'react-router-dom'
import '../App.css';
import { useContext } from 'react';
import CartContext from './CartContext';


const CartWidget = () =>{

    const {getQuantity} = useContext(CartContext)

    return(
        <>
        
        {
            // si es distinto a 0,que nos muestre el valor
            getQuantity()!==0 && 
                //dentro de la etiqueta span, mostramos la cantidad
                    <Link to={'/Cart'} ><button><HiOutlineShoppingCart/><span className='cartCounter'>{getQuantity()}</span></button></Link>
        }
        </>
    )
}

export default CartWidget;