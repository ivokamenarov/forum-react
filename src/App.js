import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import ListTopicsPage from './components/ListTopicsPage'
import Navbar from './components/Navbar'
import './App.css'
import PrivateRoute from './components/PrivateRoute'
import TopicForm from './components/TopicForm'
import TopicPage from './components/TopicPage'
import Logout from './components/Users/Logout'
import AddReplyPage from './components/Replies/AddReplyPage'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <PrivateRoute path='/logout' exact component={Logout} />
            <PrivateRoute path='/topics' exact component={ListTopicsPage} />
            <PrivateRoute path='/topics/add' exact component={TopicForm} />
            <PrivateRoute path='/topics/:topicId' exact component={TopicPage} />
            <PrivateRoute path='/topics/:topicId/add' exact component={AddReplyPage} />
          </Switch>
        </div>
      </div>
    )
  }
}
