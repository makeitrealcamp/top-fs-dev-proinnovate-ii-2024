import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type UserContextType = {
  isLoggedIn: boolean
  login: ({ email, password }: { email: string; password: string }) => void
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const login = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    //fake auth api -> login
    if (password === '123') {
      await AsyncStorage.setItem('token', 'fakeToken')
      setIsLoggedIn(true)
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token')
      setIsLoggedIn(!!token)
    }
    checkLogin()
  }, [])

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
