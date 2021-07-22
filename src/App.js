import React, {useEffect, useState} from 'react';
import './App.css';
import Perfil from './components/Perfil/Perfil'

function App() {
  
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch('https://api.github.com/users/matheusassed')
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
      });
  }, []);

  return (
    !!userInfo &&
    <div className="App">
      <Perfil user={userInfo}/>
    </div>
  );

}

export default App;
