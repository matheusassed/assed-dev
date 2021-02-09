import React from 'react';
import Photo from './components/Photo/Photo'
import Skills from './components/Skills/Skills'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import SocialLinks from './components/SocialLinks/SocialLinks'

function Perfil() {
  return(
    <div className='profileCard'>
      <Photo photoUrl={'https://i.imgur.com/4OYT2Eh.jpg'}/>
      <ProfileInfo name='Matheus Assed' role='Desenvolvedor de Sistemas' actualJob='ímpar' actualJobSite='http://inpartec.com.br' location='Rio de Janeiro, Brasil' />
      <SocialLinks/>
      <Skills skills={[
        "Front End Development",
        "SharePoint",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "jQuery",
        "UX",
        "Game Design",
        "TypeScript",
        "SQL"
      ]}/>
    </div>
  );
}

export default Perfil;