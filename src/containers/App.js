import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
// import {kitten} from './kitten';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";


class App extends Component {
  constructor() {
    super()
    this.state = {
      kittens: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(users => this.setState({kittens: users}))
  }

    onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
    }
  

  render() {
    const { kittens, searchfield } = this.state;
    const filteredKittens = kittens.filter(kitten => {
        return kitten.name.toLowerCase().includes(searchfield.toLowerCase())
      })
    return !kittens.length ? 
      <h1 className="tc f1">LOADING</h1> :
        <div className="tc">
          <h1 className="f1">KITTEN FRIENDS!</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList kitten = {filteredKittens}/>
            </ErrorBoundary> 
          </Scroll>
        </div>
      }
    }

export default App