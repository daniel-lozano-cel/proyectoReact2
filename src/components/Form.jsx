const Form = () => {
    return(
        <>
            <form>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" className="black" placeholder="Inserte su nombre"/>
                <br/>

                <label for="lastname">Apellido:</label>
                <input type="text" id="lastname" name="lastname" className="black"placeholder="Inserte su apellido"/>
                <br/>

                <label for="correo">E-mail / Correo eléctronico:  </label>
                <input type="email" id="correo" name="correo" className="black" placeholder="Inserte su e-mail"/>
            </form>
        </>
    )
}

export default Form;