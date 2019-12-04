
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Keyboard } from "react-native";
import { connect } from 'react-redux'
import Icon from "react-native-vector-icons/Feather";
import axios from 'axios'

import { API } from '../../API'
import { Header, Wrapper, Input, ButtonGreen } from '../../components'
import { errorMessage } from '../../actions/Func'
import { dataUser } from '../../actions/Main'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: 'courier@courier.com',
      password: 'password',
      isShowPassword: true,
      hide: false
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
    const { SIGN_IN, EMAIL, PASSWORD, APP_NAME, SUPPORT, FORGOT_PASSWORD } = this.props.language.lang
    const { email, password, isShowPassword, hide } = this.state;
    return (
      <Wrapper>
        <Header style={{backgroundColor: '#fff'}} props={this.props} hide_left_btn={true} hide_search={true} />
        <Text style={[styles.splash_title, styles.title]}>{APP_NAME}</Text>
        <View style={styles.content}>
          <Input value={email} placeholder={EMAIL} onChangeText={(text) => this.setState({email: text})} />
          <Input value={password} placeholder={PASSWORD} secureTextEntry={isShowPassword} secure={true}
            onChangeText={(text) => this.setState({password: text})}
            onPressSecure={() => this.setState({isShowPassword: !isShowPassword})}
          />

          <View style={{height: 40}} />

          <ButtonGreen title={SIGN_IN} onPress={() => this.loginFunc(this.state)} />

          <Text style={styles.text} onPress={() => this.props.navigation.navigate("Forgot")}>{FORGOT_PASSWORD}</Text>

        </View>
      </Wrapper>
    );
  }
  loginFunc(state){
    Keyboard.dismiss()
    const { email, password } = state
    axios({
      url: `${API}${'login'}`,
      method: 'post',
      data: {
        email: email,
        password: password
      }
    }).then((res) => {
      console.log(res)
      if(res.data.message){
        this.props.navigation.navigate("ErrorMessage", { error_message: res.data.message ? res.data.message : "Something went wrong" })
      } else {
        this.props.dataUser(res.data.courier_data ? res.data.courier_data : {})
        this.props.navigation.navigate('Home')
      }
    }).catch((err) => this.props.navigation.navigate("ErrorMessage", { error_message: err.message }))
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

export default connect(mapStateToProps, { errorMessage, dataUser })(Login);
