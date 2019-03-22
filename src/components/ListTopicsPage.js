import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopicForm from './TopicForm'
import Api from '../services/Api'

class ListTopicsPage extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.topicFormSubmit = this.topicFormSubmit.bind(this)
  }

  componentDidMount () {
    Api.fetchTopics()
      .then((listTopics) => this.setState({listTopics}))
  }

  topicFormSubmit (topic) {
    console.log('HelloComponent')
    let listTopics = this.state.listTopics
    let topicId = listTopics.length + 1
    listTopics.push({
      topicId,
      title: topic.title
    })
    this.setState({listTopics})
  }

  render () {
    let { listTopics } = this.state
    return (
      <div>
        {(listTopics) ? <ul>
          {listTopics.map((topic) => (
            <li key={topic.topicId}>
              {topic.topicId} : {topic.title}
            </li>
          ))
          }
        </ul> : <div>Loading...</div>
        }
        <Link to='addtopic' >Add new Topic</Link>
      </div>
    )
  }
}

export default ListTopicsPage
