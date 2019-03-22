import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Api from '../services/Api'
import TopicItem from './TopicItem'

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
        <h1>List of topics:</h1>
        {(listTopics) ? <div>
          {listTopics.map((topic) => (
            <TopicItem key={topic.id} topic={topic} />
          ))
          }
        </div> : <div>Loading...</div>
        }
        <Link to='addtopic' className='btn btn-primary' >Add new Topic</Link>
      </div>
    )
  }
}

export default ListTopicsPage
