import React, {useEffect, useState} from 'react';
import './App.css';
import Perfil from './components/Perfil/Perfil'

function App() {
  const [userInfo, setUserInfo] = useState();

  async function getUserInfo(){
    const resposta = await fetch('https://api.github.com/users/matheusassed');
    const respostaTratada = await resposta.json();
    return respostaTratada;
  }

  useEffect(() => {
    getUserInfo().then((resposta) => {
      setUserInfo(resposta);
    });
  }, []);


  return (
    <div className="App">
      <Perfil user={userInfo}/>
    </div>
  );


}

export default App;
