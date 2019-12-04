
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Keyboard } from "react-native";
import { connect } from 'react-redux'
import axios from 'axios'

import { API } from '../../API'
import { Header, Wrapper, Input, ButtonGreen } from '../../components'

class Forgot extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      hide: false,
    }
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  _keyboardDidShow () {
    this.setState({hide: true})
  }
  _keyboardDidHide () {
    this.setState({hide: false})
  }
  render() {
    const { SUPPORT, EMAIL, RESET_PASSWORD, RESET } = this.props.language.lang
    const { email, hide } = this.state;
    return (
      <Wrapper>
        <Header style={{backgroundColor: '#fff'}} props={this.props} hide_search={true} icon={"arrow-left"} color={"#000"} onPressLeft={() => this.props.navigation.goBack()} />
        <Text style={[styles.splash_title, styles.title]}>{RESET_PASSWORD}</Text>
        <View style={styles.content}>
          <Input value={email} placeholder={EMAIL} onChangeText={(text) => this.setState({email: text})} />
          <View style={{height: 40}} />

          <ButtonGreen title={RESET} onPress={() => this.resetFunc(email)} />

        </View>
      </Wrapper>
    );
  }
  resetFunc(email){
    Keyboard.dismiss()
    axios({
      url: `${API}${'forgot_password'}`,
      method: 'post',
      data: {
        email: email,
      }
    }).then((res) => {
      console.log(res)
      if(res.data.success || res.data.error){
        this.props.navigation.goBack()
        this.props.navigation.navigate('ErrorMessage', { error_message: res.data.error ? res.data.error : res.data.success })
      } else {
        this.props.navigation.goBack()
      }
    }).catch((err) => this.props.navigation.navigate('ErrorMessage', { error_message: err.message }))
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 16
  },
  splash: {
    flex: 1,
    backgroundColor: '#38C67C',
    alignItems: 'center',
    justifyContent: 'center'
  },
  splash_title: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    color: '#38C67C',
    marginVertical: 30
  },
  text: {
    color: '#838383',
    fontSize: 14,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    padding: 10
  },
  text_red: {
    color: '#FF0000',
    marginBottom: 10
  }
})

const mapStateToProps = (state) => {
  return {
    main: state.main,
    language: state.language,
  }
}

export default connect(mapStateToProps)(Forgot);
