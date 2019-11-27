import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

class Splash extends Component {
  render() {
    return(
      <View style={styles.splash}>
        <StatusBar backgroundColor={"#38C67C"} barStyle={"light-content"} />
        <Text style={styles.splash_title}>{"Ceebo riders"}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#38C67C',
    alignItems: 'center',
    justifyContent: 'center'
  },
  splash_title: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Heebo',
    fontWeight: 'bold',
    textAlign: 'center'
  },
})

export default Splash
