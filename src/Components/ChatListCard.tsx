import 'bootstrap/dist/css/bootstrap.min.css';
// import userIcon from '../assets/bxs-user.svg';
// import GroupIcon from '../assets/group-icon.svg';

interface ChatListCardProps {
    cardIcon: any;
    chatName:any;
  }

export default function ChatListCard({ cardIcon,chatName }: ChatListCardProps) {
    return (
        <div style={{cursor:"pointer"}} className="border rounded-3 my-2 p-2 d-flex justify-content-start align-items-center flex-row">
            <div style={{ backgroundColor: "#80a7ff" }} className="rounded-3 p-2 me-2">
                <img src={cardIcon} alt="userIcon" />
            </div>
            <div>
                <h5 className="m-0">{chatName}</h5>
                <p className="m-0">Hi</p>
            </div>
        </div>
    )
}
