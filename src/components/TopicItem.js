import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TopicItem extends Component {
  render () {
    let {topic} = this.props
    return (
      <div>
        <Link to={'/topics/' + topic.id} >{topic.id} : {topic.title}</Link>
      </div>
    )
  }
}

export default TopicItem
