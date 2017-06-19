import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, TouchableNativeFeedback, Button } from 'react-native';
import Modal from 'react-native-modal';
import ListButton from '../components/listButton';

import { StackNavigator } from 'react-navigation';

import Header from '../components/header';
import SubHeader from '../components/subHeader';
import AddButton from '../components/addButton';

export default class ListsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      newTitle: '',
      lists: {'first thing': ['a', 'b', 'c'], 'second thing': ['hey', 'woo'], 'third thing!': ['gettt']}
    };
    i = 0;
  }

  _showModal = () => this.setState({isModalVisible: true})

  hideModal = () => this.setState({isModalVisible: false})

  clearNewTitle = () => this.setState({newTitle: ''})

  handleAddButtonPress = () => {
    this._showModal();
  }

  handleSubmit = () => {
    this.addList(this.state.newTitle);
    this.hideModal();
    this.clearNewTitle();
  }

  handleCancel = () => {
    this.clearNewTitle();
    this.hideModal();
  }

  _handleTextChange = (text) => this.setState({newTitle: text})

  addList(listName) {
    
    this.state.lists[listName] = ['test'];
    this.setState({
      lists: this.state.lists
    });
  }

  render() {

    const { navigate } = this.props.navigation;

    
    var list_names = Object.keys(this.state.lists);
    var rendered_lists = list_names.map((elem) => {
      return <ListButton text={elem} key={i++} navigate={navigate} listItems={this.state.lists[elem]}/>
    });

    return (
      <View style={styles.container}>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.newListModal}>

            <TextInput 
              style={styles.input}
              placeholder='list name'
              underlineColorAndroid='transparent'
              onChangeText={this._handleTextChange}
            />

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={this.handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Header />

        <SubHeader text='Your lists' />

        <ScrollView>
          {rendered_lists}
        </ScrollView>

        <AddButton handlePress={this.handleAddButtonPress} />
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },

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

  input: {
    alignSelf: 'stretch',
    backgroundColor: 'pink',
    padding: 10,
    fontSize: 20,
    marginBottom: 15
  },

  newListModal: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  buttonsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  button: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'lightgrey'
  },

  buttonText: {
    fontSize: 15,
    padding: 10
  },

  cancelButton: {

  }
});

