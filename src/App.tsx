import './App.css';
import LoginSignupPage from './Pages/LoginSignupPage';
import Home from './Pages/Home';
import { AuthContext } from './Context/AuthContext';
import { useEffect, useState } from 'react';
import Services from './Shared/Services';

function App() {

  // changes

  //test2

  // changes1

  //ch

  // test pushing 

  const[userData, setUserData] = useState<any>(null)
  useEffect(()=>{
    Services.getUserAuth().then((res:any)=>{
      console.log(res);
      res?setUserData(res):setUserData(null);
    })
  },[])


  return (
    <div className='defaultFont'>
      <AuthContext.Provider value={{userData, setUserData}}>
        {userData?<Home/>:<LoginSignupPage/>}
      </AuthContext.Provider>
    </div>
  )
}

export default App
