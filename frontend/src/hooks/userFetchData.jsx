import {useEffect, useState} from "react"
import { token } from '../config'


const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => { 
        
        setloading(true);

        try {
            const fetchData = async () => {
                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`}
                    })
                const result = await res.json()

                if (!result.ok){
                    throw new Error(result.message)
                }

                setData(result.data);
                setloading(false);
            }
        } catch (e) {
            setloading(false)
            setError(e.message)
        }
    }, [url]);

    return {
        data, 
        loading, 
        error
    };
}

export default useFetchData