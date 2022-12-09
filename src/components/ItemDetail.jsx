
import ItemCount from './ItemCount';
import CartContext from './CartContext';
import { useContext } from 'react';

const ItemDetail = ({item}) => {

    const{ addToCart } = useContext(CartContext)

    const onAdd = (qty) =>{
        alert("You have selected " + qty + " items.");
        addToCart(item, qty)
    }

    return (
        <>
            <div className='itemDetailContainer' >
                <div>
                    <div>
                        <img src={item.pictureUrl} alt="" className='imageDetail' ></img>
                    </div>
                    <div>
                        <h1>  {item.title}</h1>
                        <h3 >Description: {item.description}</h3>
                        <span >$ {item.price}</span>
                        <p>Stock: {item.available_quantity}</p>
                    </div>
                    <ItemCount onAdd={onAdd} stock={item.available_quantity} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;