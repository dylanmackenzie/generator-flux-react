import { Dispatcher } from 'flux'
import { actionSources } from 'util/constants'

class ExtendedDispatcher extends Dispatcher {
  constructor() {
    super()
  }

  dispatch(source, type, data) {
    if (data == null) {
      data = type
      type = source
      source = actionSources.VIEW
    }

    super.dispatch({
      source,
      type,
      data,
    })
  }

  dispatchFromView(type, data) {
    this.dispatch({
      source: actionSources.VIEW,
      type,
      data,
    })
  }

  dispatchFromServer(type, data) {
    this.dispatch({
      source: actionSources.SERVER,
      type,
      data,
    })
  }

}

export default new ExtendedDispatcher
