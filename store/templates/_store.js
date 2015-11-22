import Dispatcher from 'utils/dispatcher'
import { actionTypes, actionSources } from 'utils/constants'
import BaseStore from 'utils/base-store'

function handler(action) { // eslint-disable-line complexity
  switch (action.type) {
  case actionTypes.TASK_ADDED:
    this.emitChange()
    return
  }
}

class <%=name%>Store extends BaseStore {
  constructor(handler) {
    super()
    Object.defineProperty(this, 'dispatchToken', {
      value: Dispatcher.register(handler.bind(this)),
      enumerable: true,
      writable: false,
      configurable: false,
    })
  }
}


export default new <%=name%>Store(handler)
