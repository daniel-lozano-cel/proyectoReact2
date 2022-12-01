import { useState} from 'react'
import '../App.css'
import React from 'react'
import Checkout from './Checkout';

const ItemCount = ({ props,  onAdd }) =>{
    const [unit, setUnit] = useState(0);
    
    const increaseUnit = () =>{
        setUnit(unit+1);
        if (unit >= props.available_quantity){
            setUnit(unit+0)
        }
    }
    const decreaseUnit = () =>{
        setUnit(unit-1)
        if(unit <= 0){
            setUnit(unit+0)
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
