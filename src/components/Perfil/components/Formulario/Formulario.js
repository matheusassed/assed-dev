import React, {useState} from 'react';
import styled from 'styled-components';
import './Formulario.css';
import * as emailjs from 'emailjs-com';
import { Formik, Field } from 'formik';
import schema from './schema';

const Formulario = (props) => {

  const [formResult, setFormResult] = useState(undefined);

  const Label = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    -webkit-user-select: none;
    user-select: none;
    margin-right: 20px;
    &:last-child{
      margin-right: 0;
    }
    svg{
      fill: none;
      circle{
        stroke-width: 2;
        stroke: #afafaf;
      }
      path{
        stroke: #57ABA8;
        &.inner{
          stroke-width: 6;
          stroke-dasharray: 19;
          stroke-dashoffset: 19;
        }
        &.outer{
          stroke-width: 2;
          stroke-dasharray: 57;
          stroke-dashoffset: 57;
        }
      }
    }
    input{
      display: none;
      &:checked + svg{
        path{
          transition: all .3s ease;
          &.inner{
            stroke-dashoffset: 38;
            transition-delay: .2s;
          }
          &.outer{
            stroke-dashoffset: 0;
          }
        }
      }
    }
    span{
      margin-left: 5px;
    }
  `;

  const LabelContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
  `;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ouwxw8w", "template_hf8plff", e.target, "user_nJ9h2Vx1wLPdwSIhGM4CF")
      .then(
        (result) => {
          console.log(`SUBMIT: ${result}`);
          console.log(`enviado`);
          setFormResult(`enviado`);
        },
        (error) => {
          console.log(error.text);
          console.log(`erro`);
          setFormResult('erro');
        }
      );
  }

  return (
    <div className={props.show ? 'formulario' : 'formulario notShow'}>
      {
        formResult === 'erro' ?
        <div className="submitError">
          <h3>Ocorreu um erro ao tentar enviar o formulário!</h3>
          <p>Tente novamente e se o problema persistir, pode me acionar por um dos meios de contato acima.</p>
        </div>
        :
        formResult === 'enviado' ?
        <div className="submitSuccess">
          <h3>Formulário enviado com sucesso!</h3>
          <p>Em breve, retorno o contato.</p>
        </div>
        :
        !formResult ?
        <Formik
          validationSchema={schema}
          initialValues={{
            nome: '',
            email: '',
            telefone: '',
            mensagem: '',
            contact: ''
          }}
          render={({values, handleChange, errors, touched}) => (
            <form onSubmit={handleFormSubmit}>
              <div className="fieldLabel forNome">
                <Field required type="text" name="nome" className={`${touched.name && errors.nome ? 'redPlaceholder' : ''}`} placeholder={`${touched.name && errors.nome ? 'nome é obrigatório' : 'nome'}`}/>
              </div>
              <div className="fieldLabel forEmail">
                <Field required type="text" name="email"  className={`${touched.email && errors.email ? 'redPlaceholder' : ''}`} placeholder={`${touched.email && errors.email ? 'e-mail é obrigatório' : 'e-mail'}`}/>
              </div>
              <div className="fieldLabel forTelefone">
                <Field type="text" name="telefone" className={`${touched.telefone && errors.telefone ? 'telefoneError' : ''}`} placeholder="telefone"/>
              </div>
              <div className="fieldLabel forMensagem">
                <Field as='textarea' required name="mensagem" rows="4"  className={`${touched.mensagem && errors.mensagem ? 'redPlaceholder' : ''}`} placeholder={`${touched.mensagem && errors.mensagem ? 'mensagem é obrigatória' : 'mensagem'}`}/>
              </div>

              <p>de que forma prefere receber o contato?</p>
              <LabelContainer>
                <Label htmlFor="email">
                  <input type="radio" id="email" value="email" name="contact"/>
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9"></circle>
                    <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                    <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                  </svg>
                  <span>e-mail</span>
                </Label>
                <Label htmlFor="whatsapp">
                  <input type="radio" id="whatsapp" value="whatsapp" name="contact"/>
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9"></circle>
                    <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                    <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                  </svg>
                  <span>whatsapp</span>
                </Label>
                <Label htmlFor="telegram">
                  <input type="radio" id="telegram" value="telegram" name="contact"/>
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9"></circle>
                    <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                    <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                  </svg>
                  <span>telegram</span>
                </Label> 
              </LabelContainer>

              <button type="submit">enviar</button>
            </form>
          )}
        />
        :
        <p>Algo deu errado! Por favor, entre em contato comigo por uma das redes disponibilizadas acima.</p>
      }
    </div>
  );
}

export default Formulario;