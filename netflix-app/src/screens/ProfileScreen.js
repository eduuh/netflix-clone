import React from 'react'
import "./Profile.css"
import Nav from '../Nav.js'
import {useSelector} from "react-redux"
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profilescreen_body">
                 <h1>Edit Profile</h1>
                 <div className="profileScreen_info">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6-IWIzvvi3l0tWgoqbtbQN6gukza_fYICg&usqp=CAU" alt="about image" />

                     <div className="profileScreen_details">
                       <h2>{user.email}</h2>         
                       <div className="profileScreen_plans">
                           <h3>Plans</h3>
                           <button onClick={() => auth.signOut()} className="profileScreen_signOutButton">Sign Out</button>
                       </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default ProfileScreen
