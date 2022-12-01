import {useEffect, useState} from 'react'
import {List} from '../utils/data'
import {useParams} from 'react-router-dom'
import customFetch from '../utils/customFetch'
import ItemList from '../components/ItemList.jsx'

const ItemListContainer = (item) =>{
    const[data, setData] = useState([])
    const {categoryId} = useParams()
    //Usando array de productos propio 
    useEffect(() => {
        customFetch(2000, List.filter(item => {
            if (categoryId === undefined) return item;
            return item.categoryId === parseInt(categoryId)
        }))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [data]);
   
   /*
    Consulta a la API

    setTimeout(
        useEffect(()=>{
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=microfonos')
                .then(response => response.json())
                .then(response => setData(response.results))
                .catch(error => console.log(error))
        }, [])
    , 2000)
  */

    return(

        <div className='listContainer' >
            <ItemList/> 
        </div>
    )
    
}

export default ItemListContainer