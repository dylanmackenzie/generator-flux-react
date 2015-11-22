import Dispatcher from 'utils/dispatcher'
import { actionTypes as actions } from 'utils/constants'

class <%=name%>ActionCreator {
  constructor() {}

  addItem(text) {
    Dispatcher.dispatch(actions.ACTION_NAME, { text })
  }
}

export default new <%=name%>ActionCreator
