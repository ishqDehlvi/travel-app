import React from 'react'
import { useState, useEffect } from 'react'

function useFetch(url) {
  
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
  
    setTimeout(() => {
      console.log("i am running")
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {
            throw Error(" ERROR ");
          }
          return res.json();
        })
        .then(data => {
          setError(null);
          setData(data);
          setPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log('abourt message')
          }
          else {
            setPending(false)
            setError(err.message);
          }
        });
    }, 800)
    return () => abortCont.abort();
  }, [url])
  return ({ data, isPending, error })
}

export default useFetch
