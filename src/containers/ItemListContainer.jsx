import {useEffect, useState, setProduct} from 'react'
import {useParams,} from 'react-router-dom'
import ItemList from '../components/ItemList.jsx'
import {getFirestore,  collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () =>{
    const[data, setData] = useState([])
    const {categoryId} = useParams()
 
    useEffect(()=>{
        const db = getFirestore();
        let querySnapshot;
        if(categoryId){
            querySnapshot = query(collection(db, 'items'), where('categoryId', '==', parseInt(categoryId)))
        }else{
            querySnapshot = collection(db, 'items')
        }   
        getDocs(querySnapshot).then((response) => {
            const itemsData = response.docs.map((product) => {
              return { id: product.id, ...product.data() };
            });
            setData(itemsData)
        })

       }, [categoryId]);
       
    return(

        <div className='listContainer' >
            <ItemList data={data}/> 
        </div>
    )
    
}

export default ItemListContainer