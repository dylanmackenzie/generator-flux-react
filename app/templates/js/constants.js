let sourceNames = [
  'Server',
  'View',
]

// Add actions here. They should be present-tense with the verb last.
// Each action type will be upper cased and exported on `actionTypes`
// along with its _SUCCESS and _FAILURE variants. If an action is
// synchronous and doesn't need these variants, use only the unsuffixed
// version.
let typeNames = [
  'ActionName',
]

export const CHANGE_EVENT = 'change'
export const actionSources = mapEnum(sourceNames, nameToConst)
export const actionTypes = mapActionEnum(typeNames, nameToConst)

function nameToConst(name) {
  const constRegexp = /([A-Z][a-z]*)/g

  let ret = []
  let m = constRegexp.exec(name)
  if (m == null) {
    throw new Error(`Name must match ${constRegexp.toString()}`)
  }
  for (let part = m[1]; m != null; m = constRegexp.exec(name)) {
    part = m[1]
    ret.push(part.toUpperCase(), '_')
  }

  return ret.slice(0, -1).join('')
}

function mapEnum(ar, func) {
  let obj = {}
  let iota = 0
  for (let rawKey of ar) {
    let key = func(rawKey)
    obj[key] = iota++
  }

  return obj
}

function mapActionEnum(ar, func) {
  let obj = {}
  let iota = 0
  for (let rawKey of ar) {
    let key = func(rawKey)
    obj[key] = iota++
    obj[`${key}_SUCCESS`] = iota++
    obj[`${key}_FAILURE`] = iota++
  }

  return obj
}
