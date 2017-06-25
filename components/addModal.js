import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

export default AddModal = ( {isVisible, handleTextChange, handleCancel, handleSubmit}) => {
	return (
		<Modal isVisible={isVisible}>
          <View style={styles.modal}>

            <TextInput 
              style={styles.input}
              placeholder='name'
              underlineColorAndroid='transparent'
              onChangeText={handleTextChange}
            />

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
	)
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  input: {
    alignSelf: 'stretch',
    padding: 10,
    fontSize: 20,
    marginBottom: 25,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  button: {
    borderRadius: 5,
    backgroundColor: '#bf7fbf'
  },

  buttonText: {
    fontSize: 15,
    padding: 10,
    color: 'white'
  },

 });