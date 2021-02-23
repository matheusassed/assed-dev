import React from 'react';
import Photo from './components/Photo/Photo';
import Skills from './components/Skills/Skills';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import SocialLinks from './components/SocialLinks/SocialLinks';
import './Perfil.css';

function Perfil() {
  return(
    <div className='profileCard'>
      <Photo photoUrl={'https://i.imgur.com/CPvxOnJ.jpg'}/>
      <div className='profileCardContent'>
        <ProfileInfo name='Matheus Assed' role='desenvolvedor de distemas' actualJob='ímpar' actualJobSite='http://inpartec.com.br' location='Rio de Janeiro, Brasil' />
        <SocialLinks/>
        <Skills skills={[
          "front end development",
          "sharepoint",
          "html",
          "css",
          "javascript",
          "react",
          "node",
          "jquery",
          "ux",
          "game design",
          "typescript",
          "sql"
        ]}/>
      </div>
    </div>
  );
}

export default Perfil;
