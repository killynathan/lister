import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default Header = ({title}) => {
	return (
		<View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
	)
};

const styles = StyleSheet.create({

  header: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323232',
    borderBottomWidth: 0,
    borderBottomColor: '#ededed',
  },

  headerText: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic'
  }
});
