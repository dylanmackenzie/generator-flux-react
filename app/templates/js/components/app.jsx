import React from 'react'
import Store from 'stores/<%= defaultStore %>'

export default class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      world: 'world!',
    }
  }

  _onChange() {

  }

  componentDidMount() {
    Store.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._onChange)
  }

  render() {
    return (
      <div>Hello {this.state.world}</div>
    )
  }
}
