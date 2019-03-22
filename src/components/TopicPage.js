import React, { Component } from 'react'

class TopicPage extends Component {
  render () {
    return <h1>{this.props.match.params.topicId}</h1>
  }
}

export default TopicPage
