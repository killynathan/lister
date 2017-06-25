import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default Footer = ({ text }) => {
	return (
		<View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
	)
};

const styles = StyleSheet.create({

  container: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 3,
    borderTopColor: '#ededed',
  },

  text: {
    fontSize: 17,
    color: 'white'
  }
});