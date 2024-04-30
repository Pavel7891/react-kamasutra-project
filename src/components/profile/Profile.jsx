import React from "react";
import cl from './Profile.module.css';
import MyPosts from "./myPosts/posts/MyPosts";
 

const Profile =()=> {
    return (
    <div>
        <div>
        <img src="https://t4.ftcdn.net/jpg/01/04/78/75/360_F_104787586_63vz1PkylLEfSfZ08dqTnqJqlqdq0eXx.jpg"></img>
        </div>
        <div>
        ava + description.
        </div>
        <MyPosts/>
    </div>)
}

export default Profile;