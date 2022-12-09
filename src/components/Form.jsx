import { useState, useContext } from "react";
import {collection, addDoc} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import CartContext from "./CartContext";
const Form = () => {

    const[name, setName] = useState()
    const[lastname, setLastname] = useState()
    const[email, setEmail] = useState()
    const[phone, setPhone] = useState()
    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    const db = getFirestore();
    const {cart}= useContext(CartContext)
    const {getQuantity} = useContext(CartContext)
    const [show, setShow] = useState(true)

    const nameInput = (data) => {
        setName(data.target.value)
    }
    const lastnameInput = (data) =>{
        setLastname(data.target.value)

    }
    const emailInput = (data) =>{
        setEmail(data.target.value)
    }
    const phoneInput = (data) =>{
        setPhone(data.target.value)
    }

    const  client = {
        name,
        lastname,
        email,
        phone 
    }   


    const handleInputChange = (e) => {
        client(({
            ...client,
            [e.target.name]:e.target.value
        }))
    }

    const generateOrder = async(data) => {
        setLoad(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col,data) 
            setOrderID(order.id)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = cart.map(e=> {return {id:e.id,title:e.title,price:e.price,ammount:e.quantity}})        
        const total = getQuantity()
        const data = {client,items,dia,total}
        console.log("data",data)  
        generateOrder(data)
        alert('La compra ha sido realizada exitosamente!')
        return(
            <span>Su ID de orden es: {orderID}</span>
        )
    }

    return(
        
            <>
    

                        <form>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="name" className="black" placeholder="Inserte su nombre"  onChange={nameInput}  />
                        <br/>
        
                        <label for="lastname">Apellido:</label>
                        <input type="text" id="lastname" name="lastname" className="black"placeholder="Inserte su apellido" onChange={lastnameInput}/>
                        <br/>
        
                        <label for="correo">E-mail / Correo eléctronico:  </label>
                        <input type="email" id="correo" name="correo" className="black" placeholder="Inserte su e-mail" onChange={emailInput}/>
                        <br/>
                        <label for="phone">Numero de Telefono:  </label>
                        <input type="text" id="phone" name="phone" className="black" placeholder="Inserte su telefono" onChange={phoneInput}/>
                        </form>
                        <button type="submit" onClick={handleSubmit} >Realizar compra</button> 
                
            </>
        
    )
}

export default Form;