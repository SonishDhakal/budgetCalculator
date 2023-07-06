import { useEffect, useState } from "react";

function getDataFromLocalStorage(key,defaultValue){
    const storageData = localStorage.getItem(key)
    if(storageData) {
       
        return JSON.parse(storageData)
    }
   else{
    return defaultValue
   }
}

export default function useLocalStorage(key,defaultValue){

    const [value,setValue] = useState(() =>{
       return getDataFromLocalStorage(key,defaultValue)
    })


    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(value))


    },[key,value])

    return [value,setValue]

}