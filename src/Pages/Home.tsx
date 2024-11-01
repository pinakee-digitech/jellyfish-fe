import Services from "../Shared/Services";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "../Components/SearchBar";
import PersonalChats from "../Components/PersonalChats";
import GroupChats from "../Components/GroupChats";
import Buttons from "../Components/Buttons";
import userIcon from '../assets/bxs-user.svg'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '../assets/bx-search.svg';
import SendIcon from '../assets/bxs-send.svg'

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
                <SearchBar searchIcon={SearchIcon} searchPlaceholder={"Search"} />
                <div className="w-100 my-2 d-flex justify-content-between align-items-center flex-row">
                    <Buttons value={"Personal Chats"} buttonWidth={"50%"} condition={chatList} onClick={() => setChatList(true)} />
                    <Buttons value={"Group Chats"} buttonWidth={"50%"} condition={!chatList} onClick={() => setChatList(false)} />
                </div>
                {chatList ? <></> : <Buttons value={"Create New Group"} buttonWidth={"100%"} condition={chatList} onClick={null} />}
                {chatList ? <PersonalChats /> : <GroupChats />}
            </div>

            <div style={{ width: "70%" }} className="d-flex justify-content-center align-items-center flex-column rightSide-chatSection">
                {/* <h1>Welcome to ChatApp Home Page</h1>
                <h3>{userData.name}</h3>
                <p>{userData.email}</p>
                <button onClick={Logout}>Logout</button> */}
                <div className="w-100 d-flex justify-content-end align-items-center flex-row">
                    <NotificationsIcon className="mx-2" style={{ cursor: "pointer" }} />
                    <SettingsIcon className="mx-2" style={{ cursor: "pointer" }} />
                    <LogoutIcon className="mx-2" style={{ cursor: "pointer" }} />
                    <img style={{ backgroundColor: "#80a7ff", cursor: "pointer" }} className="p-2 ms-2 rounded-circle" src={userIcon} alt="userIcon" />
                </div>
                <div className="w-100 ps-2 mt-4">
                    <div className="border rounded-3">
                        <div className="w-100 px-4 py-2 d-flex justify-content-end align-items-center flex-row">
                            <h3 className="m-0 me-2 text-end">Chat Name</h3>
                            <PersonIcon className="fs-1" />
                        </div>
                        <div style={{height:"73vh"}}>

                        </div>
                        <div className="p-2">
                        <SearchBar searchIcon={SendIcon} searchPlaceholder={"Messsage"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
