import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
  
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar)
  }, [])
  
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__content'>
          <img 
          className='nav__logo'
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='' 
          />

          <img
          className='nav__avatar' 
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='' 
          />
        </div>

    </div>
  )
}

export default Nav