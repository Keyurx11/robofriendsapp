import React, { Fragment, Component } from 'react';
import CardList from '../Components//CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import '../Containers/App.css';

class App extends Component {
	constructor() {
		super()
		this.state = { 
			robots: [],
			searchfield: ''
	}
}
	
componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
	return response.json();
	})
	.then(users => {
	this.setState({ robots : users })
	})
}


onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

render() {
		const { robots, searchfield } = this.state;
		const filterRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	 if (!robots.length) //or(robots.length === 0)
	 {
		return <h1 className="f1 tc pv7">Loading</h1>
	} else {
	return (
		<Fragment>
		<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange = {this.onSearchChange}/>
		<Scroll>
		<CardList robots = {filterRobots} />
		</Scroll>
		</div>
		</Fragment>
		)
		}
	}
}

export default App;