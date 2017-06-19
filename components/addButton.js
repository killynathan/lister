import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default AddButton = ({ handlePress }) => {
	return (
		<TouchableOpacity 
          style={styles.addButton}
          onPress={handlePress}>
            <Text>+</Text>
        </TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	addButton: {
	    backgroundColor: 'powderblue',
	    height: 60,
	    width: 60,
	    borderRadius: 50,
	    alignItems: 'center',
	    justifyContent: 'center',
	    position: 'absolute',
	    bottom: 20,
	    right: 20
	  },
});