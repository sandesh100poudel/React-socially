import "./share.css";
import  {PermMedia, Label, Room, EmojiEmotions}from  '@mui/icons-material';


function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg"src="/assets/person/1.jpeg" alt=""></img>
                 <input placeholder="what's in your mind" className="shareInput"/>

            </div>
            <hr className="shareHr"/>

               <div className="shareBotton">
                   <div className="shareOptions">
                       <div className="shareOption">
                          <PermMedia htmlColor="tomato" className="shareIcon"/>
                           <span className="shareOptionText">photo or video</span>
                       </div>

                       <div className="shareOption">
                          <Label htmlColor="blue"className="shareIcon"/>
                           <span className="shareOptionText">Tag</span>
                       </div>

                       <div className="shareOption">
                          <Room htmlColor="green"className="shareIcon"/>
                           <span className="shareOptionText">Location</span>
                       </div>

                       <div className="shareOption">
                          <EmojiEmotions htmlColor="goldenrod"className="shareIcon"/>
                           <span className="shareOptionText">Feeling</span>
                       </div>
                       <button className="shareButtons">Share</button> 
                  
                   </div>
                  
            </div>
        </div>
    </div>
  )
}

export default Share