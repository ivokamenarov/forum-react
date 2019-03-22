import React, { Component } from 'react'
import '../test.css'
import Api from '../services/Api'

class TopicForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      topic: {
        title: '',
        user: ''
      }
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSumbit = this.handleOnSumbit.bind(this)
  }

  handleOnSumbit (event) {
    event.preventDefault()
    Api.postTopic(this.state.topic)
      .then(() => {
        this.props.history.push('/topics')
      })
  }

  handleOnChange (event) {
    let topic = this.state.topic
    topic[event.target.name] = event.target.value
    this.setState({topic})
  }

  render () {
    return (
      <div>
        <h1>Topic Form</h1>
        <form onSubmit={this.handleOnSumbit}>
          <input type='text'
            name='title'
            value={this.state.topic.title}
            onChange={this.handleOnChange} />
          <input type='text'
            name='user'
            value={this.state.topic.user}
            onChange={this.handleOnChange} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default TopicForm
