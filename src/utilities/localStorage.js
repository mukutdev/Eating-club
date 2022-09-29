const addToLocalStorage =(time)=>{
    localStorage.setItem('eat-details', JSON.stringify(time));
}

export default addToLocalStorage;