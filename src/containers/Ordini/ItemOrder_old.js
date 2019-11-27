
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class ItemOrder extends Component {
  render() {
    const { color, title, consegna_title, consegna_text, previsto_title, previsto_text, pagato, not_paid } = this.props
    return (
      <View style={styles.view}>
        <View style={[styles.mark, { backgroundColor: color }]} />
        <View style={styles.block}>
          <View style={styles.col_flex}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.subtitle}>{consegna_title}</Text>
                <Text style={styles.text}>{consegna_text ? consegna_text : '-'}</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.subtitle}>{previsto_title}</Text>
                <Text style={styles.text}>{previsto_text ? previsto_text : '-'}</Text>
              </View>
            </View>
          </View>
          {not_paid ?
            <View style={styles.not_paid}>
              <View style={[styles.not_paid_mark, { backgroundColor: color }]} />
              <Text style={styles.not_paid_title}>{not_paid}</Text>
            </View>
            :
            <View style={styles.btn}>
              <Text style={styles.btn_title}>{pagato}</Text>
            </View>
          }
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 80,
    marginVertical: 6,
    flexDirection: 'row'
  },
  mark: {
    width: 10,
    height: '100%',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },
  block: {
    flex: 1,
    marginLeft: 16,
    marginLeft: 6,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.06)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  col: {
    alignItems: 'center',
    marginRight: 13
  },
  col_flex: {
    flex: 1
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontFamily: 'Heebo-Bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subtitle: {
    color: "#000",
    fontSize: 10,
    fontFamily: 'Heebo-Regular'
  },
  text: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'Heebo-Bold',
    marginTop: 6
  },
  btn: {
    width: 90,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#38C67C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_title: {
    color: "#fff",
    fontSize: 9,
    fontFamily: 'Heebo-Bold',
  },
  not_paid: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  not_paid_mark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 6
  },
  not_paid_title: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'Heebo-Bold',
  }
})

export default ItemOrder
