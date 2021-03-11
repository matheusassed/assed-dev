import React from 'react';

const Formulario = (props) => {
  return (
    <div className={props.show ? 'formulario' : 'notShow'}>
      <form method="post" action="https://app.form2chat.io/f/b1e84410">
        <input type="text" name="name" placeholder="nome"/>
        <input type="text" name="email" placeholder="e-mail"/>
        <input type="text" name="telefone" placeholder="telefone"/>
        <textarea name="mensagem" placeholder="o que você deseja?"/>

        <p>de que forma prefere receber o contato?</p>
        <input type="radio" id="email" name="contact" value="email"/>
        <label for="email">e-mail</label>
        <input type="radio" id="whatsapp" name="contact" value="whatsapp"/>
        <label for="whatsapp">whatsapp</label>
        <input type="radio" id="telegram" name="contact" value="telegram"/>
        <label for="telegram">telegram</label>
        <input type="radio" id="call" name="contact" value="call"/>
        <label for="call">ligação</label>

        <input type="submit" value="enviar"/>
      </form>
    </div>
  );
}

export default Formulario;