import React,{ useState } from 'react';
import LoginForm from './components/LoginForm';
import navbar from './components/navbar';
import { Text } from 'react-native';


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"

  }
  
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email
      })
    } else{
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }
 
  const Logout = () => {
    setUser({ name:"", email:""});
  } 

  const GotoCourse = () => {

  }

  return (
    
    <div className="App"> 
      <navbar/>
    <h1>Welcome to Crystal Delta </h1>
    
      {(user.email !=="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span> Crystal Delta welcomes you</h2>
          <button onClick={Logout}>Logout</button><Text>  </Text>
          <button onClick={GotoCourse}>GO TO COURSE</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
        
      )}
        
        </div>
    
  );
  
}
export default App;
