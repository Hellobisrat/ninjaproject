 import { useState, useEffect } from "react";
const useFetch =(URL)=> {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
        fetch(URL)
        .then(res => {
            if (!res.ok) { 
            throw Error('could not fetch the data for that resource');
            } 
            return res.json();
        })
        .then(data => {
            setIsPending(false);
            setBlogs(data);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
        }, 1000);
    }, [])
    return {data,isPending,error}
}
export default useFetch;
