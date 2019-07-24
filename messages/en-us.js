const invalid = `Field invalid`

export default {
  required: `This field is required`,
  requiredIf: (params, fields) => params.prop && typeof params.prop !== 'function' ? `Required if the field '${fields[params.prop]}' has filled` : invalid,
  requiredUnless: (params, fields) => params.prop && typeof params.prop !== 'function' ? `Required unless the field '${fields[params.prop]}' doesn't has required` : invalid,
  minLength: params => params.min ? ` Mininum length of ${params.min} characters is required` : invalid,
  maxLength: params => params.max ? `Maximum length of ${params.max} has exceeded` : invalid,
  minValue: params => params.min ? `Minimum value of ${params.min} is required` : invalid,
  maxValue: params => params.max ? `Maximum value of ${params.max} has exceeded` : invalid,
  between: params => params.min && params.max ? `Field size must be between ${params.min} and ${params.max}` : invalid,
  alpha: `Accept only characters`,
  alphaNum: `Accept only characters and numbers`,
  numeric: `Field must be a number`,
  integer: `Field must be a integer`,
  decimal: `Field must be a decimal number`,
  email: `E-mail invalid`,
  ipAddress: `IP invalid`,
  macAddress: `MAC invalid`,
  sameAs: (params, fields) => params.eq ? `Value must be equal to ${fields[params.eq]} field` : invalid,
  url: `URL invalid`,
  invalidField: invalid
}
