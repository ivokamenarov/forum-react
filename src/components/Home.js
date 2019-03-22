import React from 'react'

const Home = function (props) {
  return (
    <div>
      <h1>Hello</h1>
      <h2> World {props.match.params.name} </h2>
    </div>
  )
}

export default Home
