import React, { Component } from "react";
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
    const { robots, searchfield } = this.state;
    const fileteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (robots.length === 0) ?
        <h1 className='tc'>Loading</h1> :
        (
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

export default App;