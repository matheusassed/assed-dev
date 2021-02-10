import React from 'react';
import './Photo.css';

function Photo(props) {
  return(
    <div className="profileCardImg">
      <img src={props.photoUrl} alt="Foto do Web Designer Matheus Assed"/>
    </div>
  );
}

export default Photo;