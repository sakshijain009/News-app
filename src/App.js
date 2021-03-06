import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom"

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<News pageSize={this.pageSize} apiKey={this.apiKey}  key="general" country="in" category="general" />}></Route>
            <Route exact path="/science" element={<News pageSize={this.pageSize} apiKey={this.apiKey}  key="science" country="in" category="science" />}></Route>
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} apiKey={this.apiKey}   key="entertainment" country="in" category="entertainment" />}></Route>
            <Route exact path="/sports" element={<News pageSize={this.pageSize} apiKey={this.apiKey}   key="sports" country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News pageSize={this.pageSize} apiKey={this.apiKey}  key="technology" country="in" category="technology" />}></Route>
        </Routes>
      </div>
    )
  }
}

