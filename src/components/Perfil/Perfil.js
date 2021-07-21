import React from 'react';
import Photo from './components/Photo/Photo';
import Skills from './components/Skills/Skills';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import SocialLinks from './components/SocialLinks/SocialLinks';
import './Perfil.css';

function Perfil(props) {

  const user = props.user;

  return(
    <div className='profileCard'>
      <Photo photoUrl={user.avatar_url}/>
      <div className='profileCardContent'>
        <ProfileInfo 
          name={user.name}
          role='analista de sistemas'
          actualJob={user.company}
          actualJobSite='https://www.sebrae.com.br/sites/PortalSebrae/ufs/rj?codUf=20'
          location={user.location} />
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
