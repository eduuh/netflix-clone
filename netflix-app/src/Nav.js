import React , {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [show, handlShow] = useState(false)
    const history = useHistory()

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handlShow(true)
        }else{
            handlShow(false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar)
      return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <img 
                onClick={()=> history.push('/profile')}
                className="nav_avator" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6-IWIzvvi3l0tWgoqbtbQN6gukza_fYICg&usqp=CAU" alt="" />
            </div>
        </div>
    )
}

export default Nav