import Item from "./Item";
import {List} from '../utils/data'

const ItemList = () => {
    return(
        <>
            {
                List.map(
                    (item)=>(
                    <Item
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        pictureUrl={item.pictureUrl}
                        id={item.id}
                        available_quantity={item.available_quantity}
                    />
                    ))
            }
        </>

    )
}

export default ItemList;