import { useEffect, useState } from 'react'

const initFunc=(key,value)=>{
    //check if you have an item already in session storage
    const existingItem = JSON.parse(sessionStorage.getItem(key))
    if(existingItem){
        return existingItem
    }
    //when no existing item is there, return the user-passed prop
    return value
    // if(typeof(value) === String) return value
    // return null
}

const useSessionStorage = (key,value) => {
    const [state, setstate] = useState(()=>initFunc(key,value))
    
    useEffect(()=> sessionStorage.setItem(key,JSON.stringify(state)),[key, state])
    
    return [state,setstate]
}

export default useSessionStorage
