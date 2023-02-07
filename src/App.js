//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import './App.css';
import config from './config';

function App() {
  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignout(e) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    console.log('google', google);
    google.accounts.id.initialize({
      client_id: config.client_id,
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
    google.accounts.id.prompt();
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
      { Object.keys(user).length !== 0 &&
        <div>
          <button onClick={(e) => handleSignout(e)}>Sign out</button>
          <br/>
          <img src={user.picture} alt="user pic" referrerpolicy="no-referrer"></img>
          <h3>{user.name}</h3>
        </div>
      }
    </div>
  );
}

export default App;
