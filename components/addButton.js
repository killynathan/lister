import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default AddButton = ({ handlePress }) => {
	return (
		/*<TouchableOpacity 
          style={styles.addButton}
          onPress={handlePress}>
            <Text style={{color: 'white'}}>+</Text>
        </TouchableOpacity>*/

        <Icon name="ios-add-circle" size={70} style={styles.addButton} color='#8cb3b8' onPress={handlePress}/>
	);
}

const styles = StyleSheet.create({
	addButton: {
	    position: 'absolute',
	    bottom: 20,
	    right: 20
	  },
});