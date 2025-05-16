import React from 'react'
import {Button} from '@mui/material'
import firebase from 'firebase/compat/app';
import {auth} from "../firebase.js"

function SignIn() {
    const SignInwithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div>
        <Button onClick={SignInwithGoogle}>Googleでログインする</Button>
    </div>
  )
}

export default SignIn