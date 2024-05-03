import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
console.log(classes);

// let a = 'item';
// let b = 'active';

// let class = a + " " +b;
// let classString = `${classes.item} ${classes.active}`;

const Navbar =()=> {
    return (<nav className={classes.nav}>
    <div className = {classes.item}>
       {/* <a href="/profile">Profile</a>  */}
      <NavLink to="/profile" className ={changeColor => changeColor.isActive ? classes.item : classes.active} >Profile</NavLink>
      </div>
    <div className ={classes.item}>
       {/* <a href="/dialogues">Messages</a>  */}
      <NavLink to="/dialogues">Messages</NavLink> 
      </div>
    <div className ={classes.item}>
      {/* <a>News</a> */}
      {/* <NavLink to "">News</NavLink> */}
      </div>
    <div className ={classes.item}>
      {/* <a>Music</a> */}
      {/* <NavLink to "">Music</NavLink> */}
      </div>
      <div className ={classes.item}>
        {/* <a>Settings</a> */}
        {/* <NavLink to "">Settings</NavLink> */}
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

//// 20 //////

/* Использование в качестве ссылки NavLink to = ""
вместо  a href = "" позволяет переходить на другую 
страницу без перерисовки всего приложения. Это можно
увидеть, если открыть в панели разработчика раздел
network. Здесь видно, что при работе NavLink to =""
новых данных, которые появляются в разделе network
при перезагрузке приложения ( как это бывает при работе
a href = ""), в данном случае, при переключении страниц,
не происходит. Это экономит время и ресурс приложения.
*/

/* 
Внутри тега NavLink to = "" прописываем такую конструкцию:
className ={changeColor => changeColor.isActive ? classes.item : classes.active}
Это должно менять свойства тега при изменении булевого значения, например, при
нажатии на ссылку, кнопку. Однако этого не происходит, почему ?
*/