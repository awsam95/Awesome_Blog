import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abourtCont = new AbortController();
        setTimeout(()=> {
             fetch(url, { signal: abourtCont.signal })
             .then(res => {
                 console.log(res)
                 if(!res.ok){
                     throw Error("Could not fetch the data for that resource");
                 }
                 return res.json()
             })
             .then((data) => {
                 setData(data);
                 setIsPending(false);
                 setError(null);
             })
             .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                }
                 setIsPending(false);
                 setError(err.message);
             })
        }, 1000)

        return () => abourtCont.abort();
     }, [url])

     return {data, isPending, error}
}


export default useFetch;