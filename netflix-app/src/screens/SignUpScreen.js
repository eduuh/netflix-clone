import { applyMiddleware } from '@reduxjs/toolkit'
import React, { useRef} from 'react'
import { auth } from '../firebase'
import './SignUp.css'

export default function SignUpScreen() {

    const emailRef = useRef(null)
    const PasswordRef = useRef(null)


    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(emailRef.current.value, PasswordRef.current.value).then((d)=> {
           console.log(d)
        }).catch((error) => {
            alert(error.message)
        })
    }

    const SignIn = (e) => {
        e.preventDefault()
       auth.signInWithEmailAndPassword(
           emailRef.current.value,
           PasswordRef.current.value
       ).then( user => console.log(user)).catch(error =>  alert(error))
    }

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="Email" placeholder="Email" type="email"/>
                <input ref={PasswordRef} placeholder='Password' type="password" />
                <button onClick={SignIn}>Sign In</button>

                <h4> <span className="sigupScreenGray">New to Netflix</span>
                <span className="signUpScreen_link" onClick={register}>Sign up Now.</span>
                </h4>
            </form>
        </div>
    )
}
