import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Alert, Platform } from 'react-native';
import { connect } from 'react-redux'
import Icon from "react-native-vector-icons/Feather";
import { StackActions, NavigationActions } from 'react-navigation';

import { dataUser } from '../../actions/Main'

class SideBar extends Component {
  render() {
    const { HOME, ORDINI, DEPOSITS, SETTINGS, LOGOUT } = this.props.language.lang
    const { top_space, data_user } = this.props.main
    return (
      <View style={[styles.container, { paddingTop: top_space }]}>
        <View style={styles.row}>
          <Image style={styles.user_col_img} source={require('../../img/user_img.png')} />
          <View style={styles.col}>
            <Text style={styles.user_name}>{data_user && data_user.first_name ? data_user.first_name : ""} {data_user && data_user.last_name ? data_user.last_name : ""}</Text>
            <Text style={styles.user_id}>{"ID #"}{data_user.id}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={{height: 30}} />
          <Button title={HOME} icon={"home"} source={require('../../img/house_icon.png')} onPress={() => this.__goAndReset("Main")} />
          <Button title={ORDINI} icon={"server"} source={require('../../img/order_icon.png')} onPress={() => this.__goAndReset("Ordini")} />
          <Button title={DEPOSITS} icon={"credit-card"} source={require('../../img/user_icon.png')} onPress={() => this.__goAndReset("Deposits")} />
          <Button title={SETTINGS} icon={"settings"} source={require('../../img/user_icon.png')} onPress={() => this.__goAndReset("Settings")} />
        </ScrollView>

        <TouchableOpacity style={styles.btn_logout} onPress={() => this.logout()}>
          <Text style={styles.btn_logout_title}>{LOGOUT}</Text>
        </TouchableOpacity>

      </View>
    );
  }
  logout(){
    Alert.alert('Confirm', 'Are you sure you want to log out?', [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: () => this.__goAndReset("Login", true)},
    ]);
  }
  __goAndReset(routeName, bool) {
    console.log(this.props.navigation)
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: bool ? 'Login' : "Home",
          action: StackActions.reset({
            index: 0,
            actions: [ NavigationActions.navigate({ routeName: routeName }), ]
          }),
        }),
      ],
    });
		this.props.navigation.dispatch(resetAction);
	}
}
class Button extends Component {
  render(){
    const { title, source, onPress, icon } = this.props
    return(
      <TouchableOpacity style={styles.btn_view} onPress={() => onPress()}>
        <Icon color={'#000'} name={icon} size={24} />
        <Text style={styles.btn_title}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRightWidth: 2,
    borderRightColor: 'rgba(0, 0, 0, 0.16)'
  },
  user_col_img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 8,
    marginHorizontal: 30,
  },
  btn_view: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingLeft: 50,
    alignItems: 'center'
  },
  btn_img: {
    width: 22,
    height: 22,
  },
  btn_title: {
    fontSize: 18,
    paddingHorizontal: 16,
    color: '#000',
    fontFamily: 'Heebo-Bold'
  },
  btn_logout: {
    width: 144,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FF6060',
    marginBottom: 32,
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowColor: '#d9d9d9',
    shadowOffset: { width: 1, height: 3},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  btn_logout_title: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Heebo',
    fontWeight: 'bold'
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    flex: 1,
  },
  user_name: {
    color: "#000",
    fontSize: 23,
    fontFamily: 'Heebo-Bold',
  },
  user_id: {
    color: "#707070",
    fontSize: 18,
    fontFamily: 'Heebo-Medium'
  }
})

const mapStateToProps = (state) => {
  return {
    main: state.main,
    language: state.language
  }
}

export default connect(mapStateToProps, { dataUser })(SideBar);
