import Item from "./Item";


const ItemList = ({data}) => {
    return(
        <>
            {
                data.map(
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