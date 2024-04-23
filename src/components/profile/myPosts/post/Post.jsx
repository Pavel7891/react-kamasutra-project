import React from 'react';
import cl from './Post.module.css';


const Post =(props)=> { 

      debugger;
      //console.log(props.message);
      return(
<div className={cl.item}>
<img src="https://cdn.fishki.net/upload/post/201601/03/1800195/post-37-1100634040.jpg"/>
      {props.message}
      <div>
      <span>{props.likeCount}</span>
      </div>    
</div>
) 
}

export default Post;
 

/*props аналогичны параметрам функции
props.message props.likeCount -- это 
свойства props как объекта, одновременно 
message -- это атрибут, значения которого 
для каждной компоненты Post как тега, 
вставлены в комопненте MyPosts.  
Далее см. компоненту MyPosts.
*/