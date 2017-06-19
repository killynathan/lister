import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		var itemName = this.props.itemName;
		return (
			<View style={styles.container}>
				<TouchableOpacity 
					style={styles.button} 
					onPress={()=>{}}
				>
					<Text style={styles.title}>{itemName}</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.deleteButton}
					onPress={()=>{}}
				>
					<Text>-</Text>
				</TouchableOpacity>
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
	},

	title: {
		fontSize: 20,
		marginLeft: 20,
		color: 'black'
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