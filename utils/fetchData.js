import { useEffect, useState } from 'react'
import Axios from 'axios';

export default function FetchData(url) {
    const [data , setData] = useState();
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState();

    useEffect(()=>{
       async function fetch(){
            try{
            const raw = await Axios.get(url);
            const res = raw.data;
            setLoading(false);
            setData(res);
            return res;
            }catch(err){
                setLoading(false);
                setError('An error occured');
            }
        }
        fetch();
    },[url])

    return {loading , error , data }
}
