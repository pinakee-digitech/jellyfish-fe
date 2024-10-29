import Services from "../Shared/Services";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export default function Home() {
    const { userData, setUserData } = useContext(AuthContext);

    const Logout = () => {
        Services.Logout();
        setUserData(null);
    }

    return (
        <div>
            <h1>Welcome to ChatApp Home Page</h1>
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}
