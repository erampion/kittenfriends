import React, { Component } from "react";
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users}));
  }

  searchValueEntered = (e) => {
    this.setState({ searchfield: e.target.value });    
  }

  render() {
    const fileteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robots.length === 0) {
      return (
        <h1 className='tc'>Loading</h1>
      );
    } else {
        return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchValue={this.searchValueEntered}/>
          <Scroll>
            <CardList robots={ fileteredRobots }/>
          </Scroll>            
        </div>
        );
      }
    
  }

}



export default App;