
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class ItemOrder extends Component {
  render() {
    const { date, delivery, change, total, delivery_text, change_text, total_text, deliveries, deliveries_hours } = this.props
    return (
      <View style={styles.view}>
        <View>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.deliveries}>{deliveries} <Text style={{fontSize: 11, fontWeight: 'normal'}}>{"Deliveries"}</Text></Text>
          <Text style={styles.deliveries}>{deliveries_hours}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.title_small}>{delivery_text}</Text>
            <Text style={styles.title}>{delivery}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title_small}>{change_text}</Text>
            <Text style={styles.title}>{change}</Text>
          </View>
          <View style={[styles.col, { alignItems: 'flex-end' }]}>
            <Text style={styles.title_small}>{total_text}</Text>
            <View style={styles.total_big}>
              <Text style={styles.total_text}>{total}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 76,
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  date: {
    color: '#707070',
    fontSize: 12,
    fontFamily: 'Helvetica',
    paddingBottom: 7
  },
  deliveries: {
    color: "#404040",
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  col: {
    alignItems: 'center',
    flex: 1
  },
  title_small: {
    color: '#707070',
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  total_big: {
    padding: 3,
    borderRadius: 3,
    backgroundColor: "#909090",
  },
  total_text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  }
})

export default ItemOrder
