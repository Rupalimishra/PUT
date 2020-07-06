import React from 'react';
import { Text } from 'react-native';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: []};
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'PUT',
			body: JSON.stringify({
				id: 1,
				title: 'foo',
				body: 'bar',
				userId: 1
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
						return response.json()
		}).then(json => {
			console.log(json)
			this.setState({
				user:json
			});
		})
	}
	render() {                            
		return (
			<Text>
				<Text>Resource updated in the server as shown below</Text>
				<Text>Id : {this.state.user.id}</Text>
				<Text>Title : {this.state.user.title}</Text>
				<Text>Body : {this.state.user.body}</Text>
				<Text>UserId : {this.state.user.userId}</Text>
			</Text>
		)
	}
   }
export default App;