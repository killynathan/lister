import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../components/header';
import ListItem from '../components/listItem';
import SubHeader from '../components/subHeader';
import AddButton from '../components/addButton';
import AddModal from '../components/addModal';

export default class ListScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAddModalVisible: false,
			newItemName: ''
		}
		updateLists = props.screenProps.updateLists;
    lists = props.screenProps.lists;
    this.deleteItem = this.deleteItem.bind(this);

    this.showAddModal = this.showAddModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
	}

	showAddModal = () => this.setState({isAddModalVisible: true})

	hideAddModal = () => this.setState({isAddModalVisible: false})

  clearNewItemName = () => this.setState({newItemName: ''})

  handleSubmit = (listName, itemName) => {
    this.addItem(listName, itemName);
    this.hideAddModal();
    this.clearNewItemName();
  }

  handleCancel = () => {
    this.clearNewItemName();
    this.hideAddModal();
  }

  handleTextChange = (text) => this.setState({newItemName: text})

  addItem(listName, itemName) {
    lists[listName].push(itemName);
    updateLists(lists);
  }

	deleteItem = (listName, itemIndex) => {
	    lists[listName].splice(itemIndex, 1);
	    updateLists(lists);
	 }

	render() {
		const { params } = this.props.navigation.state;
		var {listName} = params;
		var list = lists[listName];
		var i = -1;

		var renderedListItems = list.map((elem) => {
			i++;
	      return <ListItem listName={listName} itemName={elem} key={i} index={i} deleteItem={this.deleteItem}/>
	    });

		var _handleSubmit = () => {
			this.handleSubmit(listName, this.state.newItemName);
		}

		return (
			<View style={styles.container}>
				<AddModal 
	          isVisible = {this.state.isAddModalVisible}
	          handleTextChange = {this.handleTextChange}
	          handleCancel = {this.handleCancel}
	          handleSubmit = {_handleSubmit}
	          />

				<Header title={listName}/>

				<ScrollView>
					{renderedListItems}
				</ScrollView>
				<AddButton handlePress={this.showAddModal}/>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    marginTop: 24,
	    backgroundColor: 'rgb(241, 241, 241)'
	 },
})