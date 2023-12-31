import { useEffect, useState } from "react";
import { createContext } from "react";
import Profile from '../assets/login_bg.jpeg'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TODO
    setCurrentUser({ id: 1, name: 'Jon Doe', profilePic: Profile })
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )

}