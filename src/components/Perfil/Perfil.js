import React, {useState} from 'react';
import Photo from './components/Photo/Photo';
import Skills from './components/Skills/Skills';
import Skills from './components/Formulario/Formulario';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import SocialLinks from './components/SocialLinks/SocialLinks';
import './Perfil.css';

const Perfil = () => {
  const [formVisibility, setFormVisibility] = useState(false);

  const handleForm = () => {
    setFormVisibility(!formVisibility);
  }

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
      <div className='arrow' onClick={() => handleForm()}></div>
      <Formulario visibles={formVisibility}/>
    </div>
  );
}

export default Perfil;
