import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, TouchableNativeFeedback, Button } from 'react-native';
import ListButton from '../components/listButton';

import { StackNavigator } from 'react-navigation';

import Header from '../components/header';
import SubHeader from '../components/subHeader';
import AddButton from '../components/addButton';
import AddModal from '../components/addModal';
import Footer from '../components/footer';

export default class ListsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      newTitle: '',
    };
    i = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    updateLists = props.screenProps.updateLists;
    lists = props.screenProps.lists;
  }

  showModal = () => this.setState({isModalVisible: true})

  hideModal = () => this.setState({isModalVisible: false})

  clearNewTitle = () => this.setState({newTitle: ''})

  handleAddButtonPress = () => {
    this.showModal();
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

  handleTextChange = (text) => this.setState({newTitle: text})

  addList(listName) {
    
    lists[listName] = ['test'];
    updateLists(lists);
  }

  deleteList = (listName) => {
    delete lists[listName];
    updateLists(lists);
  }

  deleteItem = (listName, itemIndex) => {
    this.state.lists[listName].splice(itemIndex, 1);
    this.setState({
      lists: this.state.lists
    });
  }

  render() {

    const { navigate } = this.props.navigation;
    
    var list_names = Object.keys(lists);
    var rendered_lists = list_names.map((elem) => {
      return <ListButton text={elem} key={i++} navigate={navigate} deleteList={this.deleteList}/>
    });

    return (
      <View style={styles.container}>

        <AddModal 
          isVisible = {this.state.isModalVisible}
          handleTextChange = {this.handleTextChange}
          handleCancel = {this.handleCancel}
          handleSubmit = {this.handleSubmit}
          />

        <Header title='- LISTER -'/>

        <ScrollView>
          {rendered_lists}
        </ScrollView>

        {/*<Footer text='Your Lists'/>*/}

        <AddButton handlePress={this.handleAddButtonPress} />
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: 'rgb(241, 241, 241)'
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
  }
});

