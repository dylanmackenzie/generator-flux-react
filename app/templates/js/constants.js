const constRegexp = /(\w[a-z]*)([A-Z]+[a-z]*)*/
function nameToConst(name) {
  let m = constRegexp.exec(name)
  if (m == null) {
    throw new Error("Name must match " + constRegexp.toString())
  }

  let i = 1
  let ret = []
  for (let part = m[i]; part != null; i++, part = m[i]) {
    ret.push(part.toUpperCase(), '_')
  }

  return ret.join('')
}

function mapEnum(ar, func) {
  let obj = {}
  for (let i = 0, len = ar.length; i < len; i++) {
    obj[func(ar[i])] = i
  }

  return obj
}

let sourceNames = [
  "server",
  "view"
]

// Each time you add an action, add it here... They should be past-tense
let typeNames = [
  "TaskAdded"
]

export let CHANGE_EVENT = 'change'
export let actionSources = mapEnum(sourceNames, nameToConst)
export let actionTypes = mapEnum(typeNames, nameToConst)
