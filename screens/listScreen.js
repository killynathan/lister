import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../components/header';
import ListItem from '../components/listItem';
import SubHeader from '../components/subHeader';
import AddButton from '../components/addButton';

export default class ListScreen extends React.Component {
	constructor(props) {
		super(props);
		var i = 0;
		this.state = {
			isModalActive: false,
			newListItem: ''
		}
	}

	handleAddButtonPress = () => this.setState({isModalActive: true});

	render() {
		const { params } = this.props.navigation.state;
		var {listName, listItems} = params;

		var renderedListItems = listItems.map((elem) => {
	      return <ListItem itemName={elem} key={i++} />
	    });

		return (
			<View style={styles.container}>
				<Header />
				<SubHeader text={listName} />
				<ScrollView>
					{renderedListItems}
				</ScrollView>
				<AddButton />
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    marginTop: 24
	 },
})