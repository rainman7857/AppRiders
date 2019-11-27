
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class ItemOrder extends Component {
  render() {
    const { order, delivery_text, time, color, status_title, money, paid, money_text, onPress } = this.props
    return (
      <TouchableOpacity style={styles.view} onPress={() => onPress()}>
        <View style={styles.col}>
          <Text style={styles.title}>#{order}</Text>
          <Text style={styles.subtitle}>{delivery_text}: <Text style={{color: "#000"}}>{time}</Text></Text>
          <View style={styles.status}>
            <View style={[styles.status_col, { backgroundColor: color }]} />
            <Text style={styles.status_title}>{status_title}</Text>
          </View>
        </View>
        <View style={styles.col_small}>
          <Text style={styles.title_money}>{money}</Text>
          <View style={[styles.money, { backgroundColor: color }]}>
            <Text style={styles.money_text}>{money_text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 30
  },
  col: {
    flex: 1,
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#939393',
    fontSize: 12,
    fontFamily: 'Heebo-Medium',
    marginVertical: 2
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status_col: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 2
  },
  status_title: {
    color: '#000',
    fontSize: 10,
    fontFamily: 'Helvetica'
  },
  col_small: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title_money: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  money: {
    width: 65,
    height: 16,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  money_text: {
    color: '#fff',
    fontSize: 9,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  }
})

export default ItemOrder
