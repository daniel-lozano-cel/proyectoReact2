import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'
const NavBar = () =>{
    return (
        <>
            <div className='navbar' >
                <h2>
                    <Link to='/'><a href="#" >SHOP</a></Link>
                </h2>
                <nav>
                    <ul className='navLinks'>
                        <Link to='/category/1' ><li>Zapatos</li></Link>
                        <Link to='/category/2' ><li>Tennis</li></Link>
                        <Link to='/category/3' ><li>Elegantes</li></Link>
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