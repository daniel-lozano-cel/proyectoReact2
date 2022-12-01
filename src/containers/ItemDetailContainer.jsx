import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import Details from "../components/ItemDetail";
const { List } = require('../utils/data');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        customFetch(2000, List.find(item => item.id === parseInt(id)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <Details item={dato} />   
    );
}

export default ItemDetailContainer;