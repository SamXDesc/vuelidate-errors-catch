const invalid = `Campo inválido`

export default {
  required: `Este campo é obrigatório`,
  requiredIf: field => `Obrigatório se o campo '${field}' estiver preenchido`,
  requiredUnless: field => `Obrigatório se o campo '${field}' não estiver preenchido`,
  minLength: min => `Tamanho mínimo de ${min} caracteres é obrigatório`,
  maxLength: max => `Tamanho máximo de ${max} foi excedido`,
  minValue: min => `Valor mínimo de ${min} é obrigatório`,
  maxValue: max => `Valor máximo de ${max} foi excedido`,
  between: params => `Tamanho do campo precisa ser entre ${params.min} e ${params.max}`,
  alpha: `O campo só pode conter letras`,
  alphaNum: `O campo só pode conter letras e números`,
  numeric: `O campo deve ser um número`,
  integer: `O campo deve ser um número inteiro`,
  decimal: `O campo deve conter um valor decimal`,
  email: `Informe um endereço de e-mail válido`,
  ipAddress: `Informe um endereço IP válido`,
  macAddress: `Informe um endereço MAC válido`,
  sameAs: field => `Valor informado deve ser igual ao campo ${field}`,
  url: `Informe uma URL válida`,
  invalidField: invalid
}
