import Box from '@mui/material/Box';
import '../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import Services from '../Shared/Services';
import { AuthContext } from '../Context/AuthContext';

export default function LoginSignupPage() {
    const[login, setLogin] = useState(true);
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const{userData,setUserData} = useContext(AuthContext);

    const userInfo = {
        "name":name,
        "email":email,
        "password":password
    }

    const setUserInfo = async()=>{
        setUserData(userInfo);
        await Services.setUserAuth(userInfo);
    }

    return (
        <div className='loginScreenBackgroundImg' style={{ height: "100vh", width: "100%", display:"flex", justifyContent:"center",alignItems:"center" }}>
            <div className='card' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", width:"25%"}}>
                <h2 style={{paddingBottom:"1rem"}}>{login?"Login":"Sign Up"}</h2>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off" style={{ width:"100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    {login?<></>:<TextField value={name} onChange={(e)=> setName(e.target.value)} style={{width:"100%"}} id="outlined-basic" label="Name" variant="outlined"/>}
                    <TextField value={email} onChange={(e)=> setEmail(e.target.value)} style={{width:"100%"}} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField value={password} onChange={(e)=> setPassword(e.target.value)} style={{width:"100%"}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                </Box>
                <p onClick={()=> login?setLogin(false):setLogin(true)} style={{ fontSize: ".8rem", cursor: "pointer",paddingBottom:"1rem",paddingTop:"0.8rem" }}>{login?"Don't have an Account":"Already have an Account"}</p>
                {login?<p style={{ fontSize: ".8rem", cursor: "pointer",paddingBottom:"1rem" }}>Forgot Password</p>:<></>}
                <Button onClick={setUserInfo} variant="contained" size="medium">
                    {login?"Login":"Sign Up"}
                </Button>
            </div>
        </div>
    )
}
