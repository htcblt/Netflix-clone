import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home/Home'
import { login, logout, selectUser } from './store/userSlice'
import Login from './components/Login/Login'
import { auth } from './api/firebase'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          }),
        )
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe
  }, [])
  return <div>{!user ? <Login /> : <Home />}</div>
}

export default App
