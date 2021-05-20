import React , {useState} from 'react'
import SignUpScreen from './SignUpScreen'
import './LoginScreen.css'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen_logo"
                    src="https://banner2.cleanpng.com/20180629/eoe/kisspng-netflix-streaming-media-television-show-logo-netflix-logo-5b35b03b7c9120.2418554915302451795102.jpg" alt="Login Screen" />
                <button className="loginScreen_button" onClick={()=> setSignIn(true)}>Sign In</button>
                <div className="loginScreen_gradient" />
            </div>
            
            <div className="loginScreen_body">
                {signIn ? (
                    <SignUpScreen />
                ): (

                <>
                   <h1>Unlimited movies, TV shows, and more.</h1>
                   <h2>Watch anywhere. Cancel anytime.</h2>
                   <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginScreen_Input">
                    <form>
                        <input type="email" placeholder="Email Address"/>
                        <button className='loginScreen_getStarted' onClick={()=> setSignIn(true)}>Get Started</button>
                    </form>
                </div>
                </>

                )}
            </div>
        </div>
    )
}

export default LoginScreen
