/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import './Navigation.css'

const Navigation = () => {
  const [show, handleShow] = useState(false)

  const transitionNavBar = () => {
    if (window.screenY > 50) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => {
      window.removeEventListener('scroll', transitionNavBar)
    }
  }, [])

  return (
    <div className={`navigation ${show && 'navigation_black'}`}>
      <div className="navigation_content">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          className="logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          onClick={() => firebase.auth().signOut()}
          className="navigation_avatar"
        />
      </div>
    </div>
  )
}

export default Navigation
