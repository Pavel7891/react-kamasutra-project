import React from "react";
import classes from './Navbar.module.css';
console.log(classes);

// let a = 'item';
// let b = 'active';

// let class = a + " " +b;
// let classString = `${classes.item} ${classes.active}`;

const Navbar =()=> {
    return (<nav className={classes.nav}>
    <div className ={classes.item}>
      <a href="/profile">Profile</a>
      </div>
    <div className ={`${classes.item} ${classes.active}`}>
      <a href="/dialogues">Messages</a> 
      </div>
    <div className ={classes.item}>
      <a>News</a>
      </div>
    <div className ={classes.item}>
      <a>Music</a>
      </div>
      <div className ={classes.item}>
        <a>Settings</a>
      </div>
  </nav>)
}

export default Navbar;

/* Объект  classes -- это название, которое мы 
дали блоку Header.module.css, как объекту. 
Прописывая в качестве имени класса {сlasses.nav}
и {classes.item}, мы берем соотвутствующие css свойства
как свойства объекта.
*/

/* Создадим дополнительный классс в Navbar.module.css 
 .item.active. Затем для одного из разделов Navbar.jsx, 
 например,Messages, пропишем название данного класса
 как свойство объекта classes, для этого "склеим"
 .item и .active через конкотинацию строк, таким образом:
 {`${classes.item} ${classes.active}`}
*/

/* <a href="/dialogues">Messages</a>
Таким образом прописываем ссылку на 
компоненту, через содержащую компоненту 
папку. Теперь, благодаря пути, прописанному
с помощью BrouserRoter, Rotes, Rote 
( см. App.js), по клику на ссылку открывается 
соответствующий компонент в виде страцицы в
браузере.
*/