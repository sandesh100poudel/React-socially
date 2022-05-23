import "./sidebar.css";
import { RssFeed,Chat, WorkOutline,School,Event, HelpOutline, Bookmark, Group, PlayCricleFilledOutlined}from "@mui/icons-material";
import OndemanondVideoIcon from '@mui/icons-material/OndemandVideo';

function Sidebar() {
  return (
    <>
    <div className="sidebar">
    <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
          <RssFeed className="sidebarIcon"/>
          <span class className="sidebarListTtemText">Feed</span>
            </li>

            <li className="sidebarListItem">
          <Chat className="sidebarIcon"/>
          <span class className="sidebarListTtemText">Chats</span>
            </li>

            <li className="sidebarListItem">
          <OndemanondVideoIcon className="sidebarIcon"/>
          <span class className="sidebarListTtemText">Video</span>
            </li>
           
            <li className="sidebarListItem">
          <Group className="sidebarIcon"/>
          <span class className="sidebarListTtemText">Groups</span>
            </li>

            <li className="sidebarListItem">
          <Bookmark className="sidebarIcon"/>
          <span class className="sidebarListTtemText">Bookmarks</span>
            </li>

            <li className="sidebarListItem">
          <HelpOutline className="sidebarIcon"/>
          <span class className="sidebarListTtemText">Question</span>
            </li>

            <li className="sidebarListItem">
          <WorkOutline className="sidebarIcon"/>
          <span class className="sidebarListTtemText">Jobs</span>
            </li>

            <li className="sidebarListItem">
          <Event className="sidebarIcon"/>
          <span class className="sidebarListTtemText">Events</span>
            </li>

            <li className="sidebarListItem">
          <School className="sidebarIcon"/>
          <span class className="sidebarListTtemText">Courses</span>
            </li>

            


        </ul>
        <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
          <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName">Bishal poudel</span>
          </li>

          <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName">Bishal poudel</span>
          </li>

          <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName">Bishal poudel</span>
          </li>

          <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName">Bishal poudel</span>
          </li>

          <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
              <span className="sidebarFriendName">Bishal poudel</span>
          </li>
      </ul>
      
      </div></div></>
    )
}

export default Sidebar