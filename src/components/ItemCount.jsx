import { useState} from 'react'
import React from 'react'
import Checkout from './Checkout';

const ItemCount = ({ stock,  onAdd }) =>{
    const [unit, setUnit] = useState(1);
    
    const increaseUnit = () =>{
        if (unit < stock){
            setUnit(unit+1)
        }
    }
    const decreaseUnit = () =>{
        if(unit >  0){
            setUnit(unit-1)
        }
    }
    const cleanUnit = () => {
        setUnit(unit - unit);
    }

    const [show,setShow]=useState(true)   
      
    return(
        <>  
            {
                show?
                    <div>
                        <button onClick={increaseUnit}>+</button>
                        <span>{unit} </span>
                        <button onClick={decreaseUnit} >-</button>
                        <button onClick={()=>onAdd(unit)} >Añadir al carrito</button>
                        <button onClick={cleanUnit}>Vaciar</button>
                    </div>
                : <Checkout/>
            }
        </>
        
    )

}
export default ItemCount;
