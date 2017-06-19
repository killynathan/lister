import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default Header = () => {
	return (
		<View style={styles.header}>
          <Text style={styles.headerText}>- LISTER -</Text>
        </View>
	)
};

const styles = StyleSheet.create({

  header: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c2427'
  },

  headerText: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic'
  }
});
