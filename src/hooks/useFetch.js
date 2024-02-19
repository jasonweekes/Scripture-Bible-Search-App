import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isloading, setisLoading] = useState(true)

    useEffect(() => {

        setisLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {setData(data)
               setisLoading(false)
            });
    }, [url])

    return [data, isloading];
}

export default useFetch;