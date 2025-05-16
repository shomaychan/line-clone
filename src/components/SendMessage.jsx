import React, { useState } from 'react'
import { db, auth } from '../firebase';
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
    const [ message, setMessage ] = useState("");
    function SendMessage(e){
        e.preventDefault();
        const {uid, photoURL } = auth.currentUser;
        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage("");
    }
  return (
    <div>
        <form onSubmit={SendMessage}>
            <div className='sendMsg'>
                <Input 
                style={{
                    width:"78%",
                    fontsize:"15px",
                    fontweight:"550",
                    marginLeft:"5px",
                    marginBottom: "-3px",
                }}
                placeholder='メッセージを入力してください' type="text" onChange={(e)=>message}/>
                <SendIcon
                style={{
                    color:"#7ac2ff",
                    marginLeft:"20px"
                }} />
            </div>
        </form>
        </div>
  )
}

export default SendMessage