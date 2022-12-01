import {Link} from 'react-router-dom'

const Checkout = () =>{
    return(
        <>
            <Link to='/cart'><a href="#"><button>Checkout</button></a></Link>
        </>
    )
}

export default Checkout;
