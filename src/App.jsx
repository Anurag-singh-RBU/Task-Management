import './App.css'
import React, {useContext, useState , useEffect} from 'react'
import Login from './Components/Authentication/Login'
import ClientDB from './Components/DashBoard/ClientDB'
import AdminDB from './Components/DashBoard/AdminDB'
import { AuthContext } from './context/Auth'

function App() {

  // eslint-disable-next-line no-unused-vars
  const [userData , setData] = useContext(AuthContext);
  const [user , setUser] = useState(null);
  const [loggedIn, setloggedIn] = useState(null)

  useEffect(() => {

    const logged = localStorage.getItem('loggedIn');

    if(logged){

      const UserData = JSON.parse(logged);
      setUser(UserData.role);
      setloggedIn(UserData.data || null);

    }
    
  },[])
  
  const handleLogin = (email , password , firstName) =>{

    if(email === "admin@gmail.com" && password === "456"){

      setUser('Admin');
      setloggedIn(userData.admin[0]);
      localStorage.setItem('loggedIn' , JSON.stringify({role : 'admin'}));

    }

    else {
      
      const foundEmployee = userData.find(emp =>

        emp.email === email && emp.password === password && emp.firstName === firstName

      );
  
      if(foundEmployee){

        setUser('Employee');
        setloggedIn(foundEmployee);
        localStorage.setItem('loggedIn', JSON.stringify({ role : 'employee' , data : foundEmployee }));

      }

      else{

        alert("Invalid Credentials");

      }

    }
}
  
  return (
    <>
      {!user ? <Login handleLogin = {handleLogin}/> : user === 'Admin' ? <AdminDB/> : <ClientDB name = {loggedIn?.firstName || 'Guest'}/>}
    </>
  )
}

export default App
