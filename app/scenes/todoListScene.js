import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default class TodoListScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <Text>What a wonderful day!</Text>
      </ScrollView>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1
  }
});
