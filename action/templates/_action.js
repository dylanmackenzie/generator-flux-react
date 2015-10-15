import Dispatcher from 'utils/dispatcher'
import { actionTypes } from 'utils/constants'

class <%=name%>ActionCreator {
  constructor() {}

  addItem(text) {
    Dispatcher.handleViewAction(actionTypes.TASK_ADDED, { text })
  }
}

export default new <%=name%>ActionCreator
