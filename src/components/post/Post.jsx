import "./post.css";


import  {MoreVert}from  '@mui/icons-material';


export default function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/1.jpeg" alt=""/>
                        <span className="postUsername">Kabita panthi</span>
                        <span className="postDate">5 min ago</span>

                    </div>
                    <div className="postTopRight">
            <MoreVert/>
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hey! its my first post
                    </span>
                    <img className="postImg"src="assets/person/1.jpeg" alt=""/>
                </div>
                <div className="postBottom">

                   <div className="postBottomLeft">
                       <img className="likeIcon"src="assets/like.png" alt=""/>
                       <img className="likeIcon"src="assets/heart.png" alt=""/>
                       <span className="postLikeCounter">32 people lilke your profiles</span>
                   </div>
                   <div className="postBottomRight">
                       <spam className="postCommentText">
                           34 comment

                       </spam>
                       </div> 
                </div>
            </div>
        </div>
    )
}