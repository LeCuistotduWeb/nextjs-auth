import {useState, useContext, createContext, useEffect} from 'react'
import api from "./axios"
import Router from 'next/router'
import {setCookie, removeCookie, getCookieFromBrowser} from './cookies'
import jwtDecode from "jwt-decode";

const DEFAULT_CONTEXT = {
  isAuthenticated: false,
  user: null,
  loading: true,
  login: ()=>{},
  logout: ()=>{},
}

const AuthContext = createContext(DEFAULT_CONTEXT)

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = async (username, password) => {
    const {data: token} = await api.post('/api/login', {username, password})
    if(token){
      setCookie('token', token)
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const userData = jwtDecode(token)
      const {data:user} = await api.get(`/api/user/${userData._id}`)
      setUser(user)
      await Router.push('/')
    }
  }

  const logout = () => {
    removeCookie('token');
    setUser(null);
    Router.push('/')
  }

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = getCookieFromBrowser('token')
      if(token) {
        try {
          api.defaults.headers.Authorization = `Bearer ${token}`;
          const userData = jwtDecode(token)
          const {data:user} = await api.get(`/api/user/${userData._id}`)
          if(user) setUser(user)
        }
        catch (e){
          if(e.response.status === 401) {
            //remove cookie if token is expired
            removeCookie('token')
            setUser(null)
          }
        }
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      user,
      login,
      logout,
      loading,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth(){
  return useContext(AuthContext);
}

