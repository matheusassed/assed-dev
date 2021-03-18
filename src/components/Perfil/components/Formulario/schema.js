import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
  mensagem: Yup.string().min(3).required(),
  telefone: Yup.string().matches(/(\(?\d{2}\)?\s)?(\d{4,5}\\-\d{4})/g),
});