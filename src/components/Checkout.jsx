import {useState} from 'react'
import Form from './Form'
const Checkout = () =>{

    const onAdd = () =>{
        alert('Su compra ha sido realizada exitosamente!')
    }


    return(
        <>
            <Form/>
            <button type="submit" onClick={onAdd}>Realizar compra</button>
        </>
    )
}

export default Checkout;
