const __invoke = params => {
  let range

  if (params) {
    range = params.match(/\D/g)

    if (!range) range = []
  }

  if (params && (params.length >= (11 + range.length))) {
    let payload = clean(params)

    let checkers = payload.slice(9)

    let valueOne = payload.slice(0, 9).split('')

    let valueTwo = payload.slice(0, 10).split('')

    return (generate(valueOne) + generate(valueTwo)) === checkers
  }

  return false
}

const generate = value => {
  let sum = 0

  value.reverse().map((item, index) => {
    sum += parseInt(item) * parseInt(index + 2)
  })

  let division = (sum % 11)

  return (division < 2 ? 0 : (11 - division)).toString()
}

const clean = value => value.replace(/\D/g, '')

export default __invoke
