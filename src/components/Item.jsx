import {Link} from 'react-router-dom'
const Item = (props) => {

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
                <Link to={`/details/${props.id}`}><a className='itemButton' href="#">View Details</a></Link>                
            </div>
        </>
          
    )
}

export default Item;