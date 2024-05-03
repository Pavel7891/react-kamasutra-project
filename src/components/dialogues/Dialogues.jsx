import React from 'react';
import st from './Dialogues.module.css';

const Dialogues =()=> {
    return (<div className={st.dialogues}>
        <div className = {st.dialoguesItems} >
            <div className={st.dialogue + ' ' + st.active}>Pavel</div>
            <div className={st.dialogue}>Andrey</div>
            <div className={st.dialogue}>Nicolay</div>
            <div className={st.dialogue}>Alina</div>
            <div className={st.dialogue}>Maria</div>
            <div className={st.dialogue}>Victor</div>
        </div>
        <div className={st.messages}>
<div className={st.message}>Hello !</div>
<div className={st.message}>How are you ?</div>
<div className={st.message}>It-kamasutra</div>
        </div>
    </div>     
    )
}

export default Dialogues;