import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			completed: false
		};
	}

	markItem = () => {
		this.setState({
			completed: !this.state.completed
		});
	}

	render() {
		var listName = this.props.listName;
		var itemName = this.props.itemName;
		var index = this.props.index;
		var deleteItem = this.props.deleteItem;
		var _deleteItem = ()=>{
			deleteItem(listName, index);
		};

		return (
			<View style={styles.container}>

				{!this.state.completed && <Icon name="ios-square-outline" size={25} color="black" style={styles.checkbox}/> }
				{this.state.completed && <Icon name="ios-checkbox-outline" size={25} color="black" style={styles.checkbox}/> }

				<TouchableOpacity 
					style={styles.button} 
					onPress={this.markItem}
				>
					<Text style={styles.title}>{itemName}</Text>
				</TouchableOpacity>

				<Icon name="ios-close-circle-outline" size={29} onPress={_deleteItem} style={{marginRight: 15}}/>
			</View>
		)
	}
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: '#d8d8d8',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center'
	},

	button: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},

	title: {
		fontSize: 20,
		marginLeft: 10,
		color: '#303030'
	},

	deleteButton: {
		height: 40,
		width: 20,
		backgroundColor: '#bbc3cc',
		alignItems: 'center',
    	justifyContent: 'center',
    	position: 'absolute',
    	right: 15
	},

	checkbox: {
		marginLeft: 15
	}
});