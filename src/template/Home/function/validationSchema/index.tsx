import * as yup from 'yup'
const telValid =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = yup.object().shape({
  name: yup.string().trim().required('Campo Obrigatorio'),
  email: yup.string().email('Email invalido').required('Campo Obrigatório'),
  tel: yup
    .string()
    .trim()
    .required('Campo Obrigatório')
    .matches(telValid, 'Número Invalido')
    .min(11, 'Telefone precisa ter no mínimo 11 caracteres')
    .max(11, 'Limite máximo de 11 caracteres.'),

  description: yup
    .string()
    .trim()
    .required('Digite sua mensagem.')
    .min(10, 'Limite mínimo de 10 caracteres.')
    .max(100, 'Limite máximo de 100 caracteres.')
})
