import {Link} from 'react-router-dom'
import CartContext from './CartContext';
import { useContext } from 'react';
const Item = (props) => {

    const{ addToCart } = useContext(CartContext)

    return (
        <>
            <div  className='itemContainer'>
                <div>
                    <img src={props.pictureUrl} className='image'  alt="Same alt value"/>
                </div>
                <div >
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <p>Precio (ARG): {props.price}</p>
                    <p>Stock disponible: {props.available_quantity}</p>
                </div>
                <Link to={`/details/${props.id}`}><button>View Details</button></Link>                
            </div>
        </>
          
    )
}

export default Item;