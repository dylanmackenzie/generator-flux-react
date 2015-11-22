import React from 'react'
import Store from 'stores/<%= defaultStore %>'
import autobind from 'autobind-decorator'
import handleStoreChange from 'utils/store-change-decorator'

@handleStoreChange(Store)
export default class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      world: 'world!',
    }
  }

  onFluxChange() {

  }

  @autobind
  _onChange() {

  }

  render() {
    return (
      <div>Hello {this.state.world}</div>
    )
  }
}
