import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default SubHeader = ({ text }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f9f8ed'
	},

	text: {
		color: 'black',
		fontSize: 17
	}
});