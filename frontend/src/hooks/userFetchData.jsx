import {useEffect, useState} from "react"
import { token } from '../config'


const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => { 
        
        setloading(true);

       
            const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`}
                    })
                const result = await res.json()
                
                if (!result){
                    throw new Error(result.message)
                }
                
                setData(result.data);
                setloading(false);
        } catch (e) {
            setloading(false)
            setError(e.message)
        }
    }
        fetchData();

    }, [url]);

    return {
        data, 
        loading, 
        error
    };
}

export default useFetchData