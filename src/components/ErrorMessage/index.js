import React, { Component  } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class ErrorMessage extends Component {
  render(){
    const { navigation } = this.props
    const message = navigation.getParam("error_message")
    return(
      <View style={styles.container} onStartShouldSetResponder={() => {
        navigation.goBack(null)
        return false
      }}>
        <View style={styles.block} onStartShouldSetResponder={() => {
          return true
        }}>
          <Text style={styles.error_message}>{message}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack(null)}>
            <Text style={styles.button_title}>{"OK"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  block: {
    width: '100%',
    maxWidth: 316,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 25
  },
  error_message: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Heebo-Bold',
    lineHeight: 26,
    textAlign: 'center',
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    height: 57,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38C67C',
    marginVertical: 24
  },
  button_title: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Heebo-Bold',
    lineHeight: 25
  }
});

export default ErrorMessage
