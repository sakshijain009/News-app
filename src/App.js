import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<News pageSize={5} key="general" country="in" category="general" />}></Route>
            <Route exact path="/science" element={<News pageSize={5} key="science" country="in" category="science" />}></Route>
            <Route exact path="/entertainment" element={<News pageSize={5}  key="entertainment" country="in" category="entertainment" />}></Route>
            <Route exact path="/sports" element={<News pageSize={5}  key="sports" country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News pageSize={5} key="technology" country="in" category="technology" />}></Route>
        </Routes>
      </div>
    )
  }
}

