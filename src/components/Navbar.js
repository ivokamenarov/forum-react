import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
  render () {
    return (
      <div className='padding'>
        <Link to='/home'>Home</Link>
        <Link to='/topics'>Topic</Link>
      </div>
    )
  }
}

export default Navbar
