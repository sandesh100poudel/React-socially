import "./topbar.css";
    
    import {Search, Person, Chat,Notifications}from "@mui/icons-material";
    

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">bishalsocial
                </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                 <Search className="searchIcon"/>
                 <input placeholder="Search for freiend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
            
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
            
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <spam className="topbarIconBadge">8</spam>
            </div>

            <div className="topbarIconItem">
                <Chat/>
                <spam className="topbarIconBadge">3</spam>
            </div>
            
            <div className="topbarIconItem">
                <Notifications/>
                <spam className="topbarIconBadge">5</spam>
            </div>
          
        

        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div></div>
    )
}