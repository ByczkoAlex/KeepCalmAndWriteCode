import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import {DialogType, messagesPage, MessageType,} from "../../redux/state";

function Dialogs(props: messagesPage) {

    let dialogsElements = props.dialogData.map((d: DialogType) => <Dialog id={d.id} name={d.name} />);
    let messagesElements = props.messagesData.map((m: MessageType) => <Message key={m.id} message={m.message}/>);

    return (

        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs