import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StackNavigator } from 'react-navigation';

export default class ListButton extends React.Component {

	constructor(props) {
		super(props);
		handleDelete = props.handleDelete
		this.state = {
			
		};
		navigate = props.navigate;
		deleteList = props.deleteList;
	}


	render() {
		var title = this.props.text;
		var listItems = this.props.listItems;

		var _deleteList = () => {
			deleteList(title);
		}
		var {deleteItem} = this.props;

		return (
			<View style={styles.container}>
				<TouchableOpacity 
					style={styles.button} 
					onPress={()=>navigate('ListScreen', {
						listName: title
					})}
				>
					<Text style={styles.title}>{title}</Text>
				</TouchableOpacity>

				<Icon name="angle-right" size={30} color="black" style={styles.nextIcon}/>

				{/*<TouchableHighlight
					style={styles.deleteButton}
					onPress={_deleteList}
				>
					<Text>-</Text>
				</TouchableHighlight>*/}
			</View>
		)
	}
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: '#d8d8d8',
		height: 80,
		flexDirection: 'row',
		alignItems: 'center'
	},

	button: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},

	title: {
		fontSize: 20,
		marginLeft: 15,
		color: '#262626'
	},

	deleteButton: {
		height: 40,
		width: 20,
		backgroundColor: 'powderblue',
		alignItems: 'center',
    	justifyContent: 'center',
    	position: 'absolute',
    	right: 15
	},

	nextIcon: {
		position: 'absolute',
    	right: 15
	}
});