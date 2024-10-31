import ChatListCard from "./ChatListCard"
import PresonalChatIcon from '../assets/bxs-user.svg';

export default function PersonalChats() {
  return (
    <div>
      <ChatListCard chatName={"PersonalChat"} cardIcon={PresonalChatIcon}/>
      <ChatListCard chatName={"PersonalChat"} cardIcon={PresonalChatIcon}/>
      <ChatListCard chatName={"PersonalChat"} cardIcon={PresonalChatIcon}/>
      <ChatListCard chatName={"PersonalChat"} cardIcon={PresonalChatIcon}/>
    </div>
  )
}
