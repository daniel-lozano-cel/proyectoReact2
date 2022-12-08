import {useState} from 'react'
const Checkout = () =>{

    const onAdd = () =>{
        alert('Su compra ha sido realizada exitosamente!')
    }


    return(
        <>
            <button onClick={onAdd}>Realizar compra</button>
        </>
    )
}

export default Checkout;
