const addToLocal=(value)=>{
    localStorage.setItem('time'  , value)
}

const getLocalStorage =()=>{
    const getLocal = localStorage.getItem('time')
    return getLocal
}
export {addToLocal , getLocalStorage} ;