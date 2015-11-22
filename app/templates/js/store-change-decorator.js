const changeHandlerName = 'onFluxChange'

function isFunc(prop) {
  return typeof prop === 'function'
}

export default function onFluxChange(...stores) {
  return function(component) {
    let oldDidMount = component.prototype.componentDidMount
    let oldWillUnmount = component.prototype.componentWillUnmount
    let didMountFlag = isFunc(oldDidMount)
    let willUnmountFlag = isFunc(oldWillUnmount)

    if (!isFunc(component.prototype[changeHandlerName])) {
      throw new Error(`Component.prototype.${changeHandlerName} must be a function`)
    }

    component.prototype.componentDidMount = function () {
      if (didMountFlag) {
        oldDidMount.call(this)
      }

      let handler = this._boundChangeHandler = () => this[changeHandlerName]()

      for (let store of stores) {
        store.addChangeListener(handler)
      }
    }

    component.prototype.componentWillUnmount = function () {
      if (willUnmountFlag) {
        oldWillUnmount.call(this)
      }

      for (let store of stores) {
        store.removeChangeListener(this._boundChangeHandler)
      }
    }
  }
}
