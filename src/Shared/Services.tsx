const setUserAuth = async(value:any)=>{
    await localStorage.setItem('userData', JSON.stringify(value));
}

const getUserAuth = async()=>{
    const value:any = await localStorage.getItem('userData');
    return JSON.parse(value);
}

const Logout = ()=>{
    localStorage.clear();
}

export default {
    setUserAuth,
    getUserAuth,
    Logout
}