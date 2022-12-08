import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (productToAdd, quantity) => {
    //Se crea un objeto
    const newObj = {
        ... productToAdd,
        quantity
      }

    if(isInCart(newObj.id)){
        // vamos a hacer un map y sumar las cantidades, así no duplicamos
              cart.map(el => {
                if(el.id === newObj.id)  {
                  el.quantity += newObj.quantity
                }
        //retornamos 
                return(el)
                })
            }
        // si es un producto que no está en el carrito, lo va a agregar. 
    else {
            setCart([... cart , newObj])
        }
    }

    const isInCart = (id) => {
        // con el método some, nos va a retornar true o false, si el producto está o no está en el carrito.
        return cart.some(el => el.id === id)
    }
    const getQuantity = () => {
        // vamos a crear una variable con valor 0
              let count = 0
              cart.forEach(prod => {
        // dentro del forEach vamos a sumar los valores
                  count = count + prod.quantity
              })
        // lo retornamos
              return count
          }
        

    return (
        <CartContext.Provider value={{cart, addToCart, getQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;