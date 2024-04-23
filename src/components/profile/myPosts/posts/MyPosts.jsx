import React from "react";
import cl from './MyPosts.module.css';
import Post from "../post/Post";

const MyPosts =()=> {
    return (
        <div>
          My posts.
          <div>
            <textarea></textarea>
            <button>Add button</button>
          </div>
        <div>
          New posts.
        </div>
        <div className={cl.posts}>
 <Post message="Hi, how are you ?" likeCount = "10" />
 <Post message="I've got some news for you" likeCount = "20" />
 <Post message="Hope, you are lucky" likeCount = "25" />
</div>      
</div>)
}

export default MyPosts;