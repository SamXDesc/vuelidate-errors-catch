import isFunction from '../../helpers/IsFunction'

const invalid = `Field invalid`

export default {
  required: `This field is required`,
  requiredIf: field => `Required if the field '${field}' has filled`,
  requiredUnless: field => `Required unless the field '${field}' doesn't has required`,
  minLength: min => ` Mininum length of ${min} characters is required`,
  maxLength: max => `Maximum length of ${max} has exceeded`,
  minValue: min => `Minimum value of ${min} is required`,
  maxValue: max => `Maximum value of ${max} has exceeded`,
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
