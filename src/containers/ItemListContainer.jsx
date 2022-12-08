import {useEffect, useState, setProduct} from 'react'
import {List} from '../utils/data'
import {useParams,} from 'react-router-dom'
import customFetch from '../utils/customFetch'
import ItemList from '../components/ItemList.jsx'
import {getFirestore, getDoc, doc} from "firebase/firestore";

const ItemListContainer = (item) =>{
    const[data, setData] = useState([])
    const {categoryId} = useParams()
    //Usando array de productos propio 

    /*
    Promesa para acceder a los items locales

    useEffect(() => {
        customFetch(2000, List.filter(item => {
            if (categoryId === undefined) return item;
            return item.categoryId === parseInt(categoryId)
        }))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [data]);
    */
    useEffect(()=>{
        const db = getFirestore();
        const biciRef = doc(db, "items", "b4enb3JumTajpecsfd9s");
        getDoc(biciRef).then((snapshot)=>{
            if(snapshot.exists()){
                setProduct({id:snapshot.id, ...snapshot.data()});
            }
        });
       }, []);

    return(

        <div className='listContainer' >
            <ItemList/> 
        </div>
    )
    
}

export default ItemListContainer