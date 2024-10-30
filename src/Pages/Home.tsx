import Services from "../Shared/Services";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "../Components/SearchBar";
import ChatListCard from "../Components/ChatListCard";

export default function Home() {
    const { userData, setUserData } = useContext(AuthContext);

    const Logout = () => {
        Services.Logout();
        setUserData(null);
    }

    return (
        <div className="p-2" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "start" }}>
            <div style={{ width: "30%", height:"97vh" }} className="rounded-3 px-3 py-4 border leftSide-chatSection">
                <h3 className="text-center">Chat App</h3>
                <SearchBar/>
                <ChatListCard/>
                <ChatListCard/>
                <ChatListCard/>
                <ChatListCard/>
            </div>

            <div style={{ width: "70%" }} className="d-flex justify-content-start align-items-center flex-column rightSide-chatSection">
                <h1>Welcome to ChatApp Home Page</h1>
                <h3>{userData.name}</h3>
                <p>{userData.email}</p>
                <button onClick={Logout}>Logout</button>
            </div>
        </div>
    )
}
