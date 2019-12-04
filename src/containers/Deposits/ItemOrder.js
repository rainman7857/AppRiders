
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class ItemOrder extends Component {
  render() {
    const { created_title, created_text, returned_title, returned_text, total_title, total } = this.props
    return (
      <View style={styles.view}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.title_small}>{created_title}</Text>
            <Text style={styles.title}>{created_text}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.title_small}>{returned_title}</Text>
            <Text style={styles.title}>{returned_text}</Text>
          </View>
          <View style={[styles.col, { alignItems: 'flex-end' }]}>
            <Text style={[styles.title_small, { paddingBottom: 0 }]}>{total_title}</Text>
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
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  col: {
    alignItems: 'center',
    flex: 1,
    minHeight: 50
  },
  title_small: {
    color: '#7E7E7E',
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    paddingBottom: 6
  },
  title: {
    color: '#000',
    fontSize: 14,
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
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  }
})

export default ItemOrder
