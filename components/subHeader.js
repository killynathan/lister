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
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#494e6b'
	},

	text: {
		color: 'white',
		fontSize: 20
	}
});