import React, { Component } from 'react'

export default (WrappedComponent) => {
  return class extends Component {
    constructor (props) {
      super(props)
      this.state = {
        data: [],
        ready: false
      }
    }

    componentDidMount () {
      this.props.request()
        .then(res => this.setState({
          data: res.data,
          ready: true
        }))
    }

    render () {
      if (this.state.ready) {
        return (<WrappedComponent
          data={this.state.data} {...this.props} />)
      } else {
        return (<div>Loading...</div>)
      }
    }
  }
}
