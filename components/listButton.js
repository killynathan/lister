import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class ListButton extends React.Component {

	constructor(props) {
		super(props);
		handleDelete = props.handleDelete
		this.state = {
			
		};
		navigate = props.navigate;
	}

	render() {
		var title = this.props.text;
		var listItems = this.props.listItems;
		return (
			<View style={styles.container}>
				<TouchableOpacity 
					style={styles.button} 
					onPress={()=>navigate('ListScreen', {
						listName: title,
						listItems: listItems
					})}
				>
					<Text style={styles.title}>{title}</Text>
				</TouchableOpacity>

				<TouchableHighlight
					style={styles.deleteButton}
					onPress={()=>{}}
				>
					<Text>-</Text>
				</TouchableHighlight>
			</View>
		)
	}
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderBottomWidth: 2,
		borderBottomColor: 'black',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center'
	},

	button: {
		flex: 1,
		backgroundColor: 'pink'
	},

	title: {
		fontSize: 20,
		marginLeft: 20
	},

	deleteButton: {
		borderRadius: 50,
		height: 25,
		width: 25,
		backgroundColor: 'skyblue',
		alignItems: 'center',
    	justifyContent: 'center',
    	position: 'absolute',
    	right: 20
	}
});