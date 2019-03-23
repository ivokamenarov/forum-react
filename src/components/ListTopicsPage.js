import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Api from '../services/Api'
import Topics from './AllTopics'

class ListTopicsPage extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>List of topics:</h1>
        <Topics request={Api.fetchTopics()} />
        <Link to='addtopic' className='btn btn-primary' >Add new Topic</Link>
      </div>
    )
  }
}

export default ListTopicsPage
