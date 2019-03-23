import React, { Component } from 'react'
import Api from '../services/Api'
import TopicInfo from './TopicInfo'

class TopicPage extends Component {
  render () {
    let {topicId} = this.props.match.params
    return (
      <div>
        <TopicInfo request={Api.fetchTopicById(topicId)} />
        {/* <TopicReplies request={Api.fetchRepliesByTopicId(topicId)} /> */}
      </div>
    )
  }
}

export default TopicPage
