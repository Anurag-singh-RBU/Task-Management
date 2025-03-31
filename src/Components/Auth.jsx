import React, { createContext , useState , useEffect } from 'react'
import { getLS, setLS } from '../Utils/LocalStorage';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const Auth = ({children}) => {

  // localStorage.clear();

  const [userData , setData] = useState(null);

  useEffect(() => {

    setLS();
    const {employees} = getLS();
    setData(employees);

  } , [])

  return (
    <div>
      <AuthContext.Provider value = {[userData , setData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Auth