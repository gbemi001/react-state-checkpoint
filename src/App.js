import './App.css';
import React, { useState } from 'react';

class App extends React.Component {
  state = {
    imgSrc: "",
    fullName: "",
    profession: "",
    bio: ""
  }

  
  handleToggle = () => this.setState({imgSrc:"./public/gbemiYoloye.jpg",
  fullName: "Oluwagbemi Yoloye",
  profession: "Football Coach",
  bio: "Learned Full Stack JS at GoMyCode",
  })
  
  render () {
    return (
    <div className="App">
      <div>
        <button onClick = {this.handleToggle}><input type="checkbox"/></button>
      </div>
      <div>{this.state.imgSrc}</div>
      <h1>{this.state.fullName}</h1>
      <h2>{this.state.profession}</h2>
      <h3>{this.state.bio}</h3>
    </div>
  )
 }
};
export default App;
