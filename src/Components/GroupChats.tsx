import ChatListCard from "./ChatListCard"
import GroupIcon from '../assets/group-icon.svg';

export default function GroupChats() {
  return (
    <div>
      <ChatListCard chatName={"GrpupChats"} cardIcon={GroupIcon}/>
      <ChatListCard chatName={"GrpupChats"} cardIcon={GroupIcon}/>
      <ChatListCard chatName={"GrpupChats"} cardIcon={GroupIcon}/>
      <ChatListCard chatName={"GrpupChats"} cardIcon={GroupIcon}/>
    </div>
  )
}
