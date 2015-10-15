import { CHANGE_EVENT } from 'utils/constants'
import { EventEmitter } from 'events'

export default class BaseStore extends EventEmitter {
  constructor() {
    super()
  }

  // Allow Controller-View to register itself with store
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb)
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb)
  }

  // triggers change listener above, firing controller-view callback
  emitChange() {
    this.emit(CHANGE_EVENT)
  }
}
