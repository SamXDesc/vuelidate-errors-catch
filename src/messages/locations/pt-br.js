import isFunction from '../../helpers/IsFunction'

const invalid = `Campo inválido`

export default {
  required: `Este campo é obrigatório`,
  requiredIf: field => field && !isFunction(field) ? `Obrigatório se o campo '${field}' estiver preenchido` : invalid,
  requiredUnless: field => field && !isFunction(field) ? `Obrigatório se o campo '${field}' não estiver preenchido` : invalid,
  minLength: params => params.min ? `Tamanho mínimo de ${params.min} caracteres é obrigatório` : invalid,
  maxLength: params => params.max ? `Tamanho máximo de ${params.max} foi excedido` : invalid,
  minValue: params => params.min ? `Valor mínimo de ${params.min} é obrigatório` : invalid,
  maxValue: params => params.max ? `Valor máximo de ${params.max} foi excedido` : invalid,
  between: params => params.min && params.max ? `Tamanho do campo precisa ser entre ${params.min} e ${params.max}` : invalid,
  alpha: `O campo só pode conter letras`,
  alphaNum: `O campo só pode conter letras e números`,
  numeric: `O campo deve ser um número`,
  integer: `O campo deve ser um número inteiro`,
  decimal: `O campo deve conter um valor decimal`,
  email: `Informe um endereço de e-mail válido`,
  ipAddress: `Informe um endereço IP válido`,
  macAddress: `Informe um endereço MAC válido`,
  sameAs: field => field && !isFunction(field) ? `Valor informado deve ser igual a ${field}` : invalid,
  url: `Informe uma URL válida`,
  invalidField: invalid
}
