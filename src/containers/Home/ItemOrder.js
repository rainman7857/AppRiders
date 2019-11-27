
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Platform, Dimensions } from "react-native";
import { connect } from 'react-redux'

const { width } = Dimensions.get('window')

class ItemOrder extends Component {
  render() {
    const { onPress, title, page, subtitle, location, text_product, pagato, text_orario, text_time, onPressPhone, title_apri, onPressApri, pagare, cash } = this.props
    return (
      <TouchableOpacity style={styles.block} onPress={() => onPress()} disabled={true}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.page}>
            <Text style={styles.page_text}>{page}</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.text_product}>{text_product}</Text>
            {cash ?
              <View style={[styles.pagato, { backgroundColor: "#fff"}]}>
                <Text style={[styles.pagato_title, { color: "#38C67C" }]}>{"Cash"}</Text>
              </View>
              : null
            }
          </View>
          <View style={[styles.col, { maxWidth: 145, alignItems: 'center', paddingTop: 13 }]}>
            <Text style={styles.text_orario}>{text_orario}</Text>
            <Text style={styles.text_time}>{text_time}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn_phone} onPress={() => onPressPhone()}>
            <Image style={styles.btn_phone_icon} source={require('../../img/phone_icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_apri} onPress={() => onPressApri()}>
            <Text style={styles.btn_apri_title}>{title_apri}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    width: '100%',
    padding: 12,
    borderRadius: 18,
    marginHorizontal: 4,
    backgroundColor: '#38C67C',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.06)'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  page: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#DB6161",
    borderWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  page_text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Helvetica'
  },
  subtitle: {
    color: "#fff",
    fontSize: 26,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  location: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
  col: {
    flex: 1,
  },
  text_product: {
    color: "#fff",
    fontSize: 20,
    fontFamily: 'Helvetica',
  },
  pagato: {
    marginTop: 5,
    width: 90,
    height: 22,
    borderRadius: 23,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pagato_title: {
    color: '#38C67C',
    fontSize: 9,
    fontFamily: 'Helvetica'
  },
  text_orario: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
  text_time: {
    color: "#fff",
    fontSize: 34,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  btn_phone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.06)'
  },
  btn_phone_icon: {
    width: 24,
    height: 24,
  },
  btn_apri: {
    width: 145,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.06)'
  },
  btn_apri_title: {
    color: '#707070',
    fontSize: 17,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  }
})

export default ItemOrder
