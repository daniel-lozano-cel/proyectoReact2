
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    const onAdd = (qty) =>{
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
            <div className='itemDetailContainer' >
                <div>
                    <div>
                        <img src={item.pictureUrl} alt="" className='imageDetail' ></img>
                    </div>
                    <div>
                        <h1>  {item.name}</h1>
                        <h3 >{item.description}</h3>
                        <span >$ {item.price}</span>
                        <p>Stock: {item.available_quantity}</p>
                    </div>
                    <ItemCount onAdd={onAdd} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;