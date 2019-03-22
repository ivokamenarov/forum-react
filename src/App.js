import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import ListTopicsPage from './components/ListTopicsPage'
import Navbar from './components/Navbar'
import './App.css'
import TopicForm from './components/TopicForm'
import TopicPage from './components/TopicPage'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/topics' exact component={ListTopicsPage} />
          <Route path='/topics/:topicId' component={TopicPage} />
          <Route path='/addtopic' component={TopicForm} />
        </Switch>
      </div>
    )
  }
}
