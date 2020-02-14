import React,{Component} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import "./App.css"
import Scroll from "../components/Scroll"
import ErrorDetection from "../components/ErrorDetection"
class App extends Component {
	constructor(){
		super();
		this.state={
			robots: [],
			searchField: ""
		};
	}
	componentDidMount()
	{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
	}
	onSearchChange=(event)=>{
		this.setState({searchField: event.target.value});

	}
	render(){
		const {robots,searchField}=this.state;
		const filteredRobots=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase()); 
		});
		if(robots.length === 0)
			return <h1 className="tc f1 "> Loading </h1>;
		return(	
		<div className="tc">
			<h1 className="f1">RobotFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorDetection>
					<CardList robots={filteredRobots}/>
				</ErrorDetection>
			</Scroll>
		</div>
		);
	}
}
export default App;