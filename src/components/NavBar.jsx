import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'

import '../App.css'
const NavBar = () =>{
    return (
        <>
            <div className='navbar' >
                <h2>
                    <Link to='/'><a href="#" >SHOP</a></Link>
                </h2>
                <nav>
                    <ul className='navLinks'>
                        <Link to='/category/1' ><li><a href="#">Zapatos</a></li></Link>
                        <Link to='/category/2' ><li><a href="#">Tennis</a></li></Link>
                        <Link to='/category/3' ><li><a href="#">Elegantes</a></li></Link>
                    </ul>
                </nav>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </>
    )
}
export default NavBar;