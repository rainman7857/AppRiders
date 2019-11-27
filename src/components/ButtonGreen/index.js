
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Platform } from "react-native";

class ButtonGreen extends Component {
  render() {
    const { style, title, onPress, styleContainer, disabled } = this.props
    return (
      <View style={[styles.block, styleContainer]}>
        <TouchableOpacity style={[styles.btn, style]} onPress={onPress} disabled={disabled}>
          <Text style={styles.btn_title}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: 48,
    paddingHorizontal: 36,
    marginVertical: 20
  },
  btn: {
    width: 144,
    height: '100%',
    borderRadius: 24,
    backgroundColor: '#38C67C',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowColor: '#d9d9d9',
    shadowOffset: { width: 1, height: 3},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  btn_title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default ButtonGreen
