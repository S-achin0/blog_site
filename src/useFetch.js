import { useState,useEffect } from "react";



const useFetch = (url) => {
    const [data,setdata]=useState(null);
     
    const [ispending,setpending]=useState(true);
    const [error,seterror]=useState(null);
     
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error("could not fetch the data for that resources");
            }
           return res.json();
        })
        .then(data=>{
    console.log(data);
    setdata(data);
     setpending(false);
     seterror(null);
    
        })
        .catch(err=>{ 
            setpending(false);
             seterror(err.message);
           
        })
        
    
        
       },[url]);
       return {data,ispending,error};
    
}
 
export default useFetch;