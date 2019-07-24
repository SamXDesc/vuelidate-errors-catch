import isFunction from '../../helpers/IsFunction'

const invalid = `Field invalid`

export default {
  required: `This field is required`,
  requiredIf: field => `Required if the field '${field}' has filled`,
  requiredUnless: field => `Required unless the field '${field}' doesn't has required`,
  minLength: params => ` Mininum length of ${params.min} characters is required`,
  maxLength: params => `Maximum length of ${params.max} has exceeded`,
  minValue: params => `Minimum value of ${params.min} is required`,
  maxValue: params => `Maximum value of ${params.max} has exceeded`,
  between: params => `Field size must be between ${params.min} and ${params.max}`,
  alpha: `Accept only characters`,
  alphaNum: `Accept only characters and numbers`,
  numeric: `Field must be a number`,
  integer: `Field must be a integer`,
  decimal: `Field must be a decimal number`,
  email: `E-mail invalid`,
  ipAddress: `IP invalid`,
  macAddress: `MAC invalid`,
  sameAs: field => `Value must be equal to ${field} field`,
  url: `URL invalid`,
  invalidField: invalid
}
