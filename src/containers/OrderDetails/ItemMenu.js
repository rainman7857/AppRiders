
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Platform } from "react-native";

class ItemMenu extends Component {
  render() {
    const { count, name, price, data } = this.props
    return (
      <View style={styles.row}>
        <Text style={styles.count}>{count}     x</Text>
        <View style={styles.col}>
          <Text style={[styles.count, { fontSize: 14 }]}>{name}</Text>
          {data ? data.map((item, i) => (<Text key={i} style={styles.subtitle}>{item}</Text>)) : null}
        </View>
        <Text style={styles.title}>{price}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 4
  },
  count: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Helvetica'
  },
  col: {
    flex: 1,
    paddingLeft: 8
  },
  subtitle: {
    color: '#7E7E7E',
    fontSize: 10,
    fontFamily: 'Helvetica'
  },
  title: {
    color: "#000",
    fontSize: 13,
    fontFamily: 'Helvetica'
  }
})

export default ItemMenu
