
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Platform } from "react-native";
import { connect } from 'react-redux'

class Item extends Component {
  render() {
    const { title, title_text, check, onPress, data_menu, onPressAccept, accept_title } = this.props
    return (
      <TouchableOpacity style={styles.block} onPress={() => onPress()} disabled={true}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title_text}>{title_text}</Text>
          {check ?
            <View style={styles.check}>
              <Image style={styles.check_icon} source={require('../../img/check_icon.png')} resizeMode={'contain'} />
            </View>
            :
            <View style={{width: 27}} />
          }
        </View>
        {check ? null :
          <View style={[styles.col, { paddingTop: 8 }]}>
            {data_menu ? data_menu.map((item, i) => (<Text key={i} style={styles.subtitle}>{item.qty}  x  {item.name}</Text>)) : null}
            <View style={[styles.row, { marginTop: 16 }]}>
              <View style={styles.col} />
              <TouchableOpacity style={styles.btn_close} onPress={() => onPressAccept()}>
                <Text style={styles.btn_title}>{accept_title}</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 12,
    marginVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.16)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    flex: 1
  },
  title_text: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Helvetica',
    paddingHorizontal: 8
  },
  check: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.06)',
    backgroundColor: '#38C67C'
  },
  check_icon: {
    width: 13,
    height: 13
  },
  col: {
    flex: 1,
  },
  subtitle: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Helvetica',
    paddingHorizontal: 6
  },
  btn_close: {
    width: 120,
    height: 40,
    borderRadius: 24,
    backgroundColor: '#38C67C',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.06)'
  },
  btn_title: {
    color: "#fff",
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  }
})

export default Item
