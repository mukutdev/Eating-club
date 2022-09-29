const addToLocal=(value)=>{
    localStorage.setItem('time'  , value)
}

const getLocalStorage =()=>{
    const getLocal = localStorage.getItem('time')
    return getLocal
}

const clearLocalStorage =()=>{
    const clear = localStorage.setItem('time'  , 0)
    return clear;
}
export {addToLocal , getLocalStorage , clearLocalStorage} ;