import Services from "../Shared/Services";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "../Components/SearchBar";
import PersonalChats from "../Components/PersonalChats";
import GroupChats from "../Components/GroupChats";
import Buttons from "../Components/Buttons";

export default function Home() {
    const { userData, setUserData } = useContext(AuthContext);

    const [chatList, setChatList] = useState(true)

    const Logout = () => {
        Services.Logout();
        setUserData(null);
    }

    return (
        <div className="p-2" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "start" }}>
            <div style={{ width: "30%", height: "97vh" }} className="rounded-3 px-3 py-4 border leftSide-chatSection">
                <h3 className="text-center">Chat App</h3>
                <SearchBar />
                <div className="w-100 my-2 d-flex justify-content-between align-items-center flex-row">
                    <Buttons value={"Personal Chats"} buttonWidth={"50%"} condition={chatList} onClick={()=> setChatList(true)}/>
                    <Buttons value={"Group Chats"} buttonWidth={"50%"} condition={!chatList} onClick={()=> setChatList(false)}/>
                </div>
                {chatList?<></>:<Buttons value={"Create New Group"} buttonWidth={"100%"} condition={chatList} onClick={null}/>}
                {chatList ? <PersonalChats /> : <GroupChats />}
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
