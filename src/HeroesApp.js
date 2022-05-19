import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false}  
}

export const HeroesApp = () => {
  
  const [user, dispach] = useReducer( authReducer, {}, init)
  
  useEffect(() => {
    if (!user) return;

    localStorage.setItem('user', JSON.stringify(user) ); 
  }, [user])
  

  return (
    <div>
        <AuthContext.Provider value={{
          user,
          dispach
        }}>
          <AppRouter/>
        </AuthContext.Provider>
    </div>
  )
} 
