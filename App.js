import React from 'react';
import {Text,Alert} from 'react-native';

import { StackNavigator } from 'react-navigation';
import ListsScreen from './screens/listsScreen';
import ListScreen from './screens/listScreen';


const Nav = StackNavigator({
  Home: {screen: ListsScreen},
  ListScreen: {screen: ListScreen}
}, {
  headerMode: 'none'
});

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: {'letters': ['a', 'b', 'c'], 'wtf': ['hey', 'woo'], 'gotti': ['gettt']}
		}
		this.updateLists = this.updateLists.bind(this);
	}

	updateLists = (_lists) => {
		this.setState({
			lists: _lists
		});
	}

	render() {
		return (
			<Nav 
				screenProps={{
					lists: this.state.lists,
					updateLists: this.updateLists
				}}
			/>
		);
	}
}
