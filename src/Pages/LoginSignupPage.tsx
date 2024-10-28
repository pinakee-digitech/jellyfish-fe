import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function LoginSignupPage() {
    const[login, setLogin] = useState(true);

    return (
        <div style={{ height: "100vh", width: "100%", display:"flex", justifyContent:"center",alignItems:"center" }}>
            <div className='card' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column", width:"25%"}}>
                <h2 style={{paddingBottom:"1rem"}}>{login?"Login":"Sign Up"}</h2>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off" style={{ width:"100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    {login?<></>:<TextField style={{width:"100%"}} id="outlined-basic" label="Name" variant="outlined"/>}
                    <TextField style={{width:"100%"}} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField style={{width:"100%"}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                </Box>
                <p onClick={()=> login?setLogin(false):setLogin(true)} style={{ fontSize: ".8rem", cursor: "pointer",paddingBottom:"1rem",paddingTop:"0.8rem" }}>{login?"Don't have an Account":"Already have an Account"}</p>
                {login?<p style={{ fontSize: ".8rem", cursor: "pointer",paddingBottom:"1rem" }}>Forgot Password</p>:<></>}
                <Button variant="contained" size="medium">
                    {login?"Login":"Sign Up"}
                </Button>
            </div>
        </div>
    )
}
