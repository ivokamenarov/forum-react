import React, { Component } from 'react'
import Api from '../services/Api'

class TopicPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    Api.fetchTopicById(this.props.match.params.topicId)
      .then((result) => {
        console.log(result.data)
      })
  }

  render () {
    return <h1>{this.props.match.params.topicId}</h1>
  }
}

export default TopicPage
