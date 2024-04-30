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
      <span>like:{props.likeCount}</span>
      </div>    
</div>
) 
}

export default Post;
 

/*props аналогичны параметрам функции
{props.message} и {props.likeCount} -- это 
свойства props как js-объекта, поэтому они
прописаны таким образом; 
одновременно message и likeCount
-- это атрибуты,значения которых можно 
задавать для каждной компоненты Post 
как тега. Эти атрибуты вставлены в 
комопненте MyPosts.  
Далее см. компоненту MyPosts.
*/
