
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Keyboard, Platform } from "react-native";
import { connect } from 'react-redux'
import moment from 'moment'
import Icon from "react-native-vector-icons/Feather";
import Communications from 'react-native-communications';
import axios from 'axios'

import { Header, Wrapper, Input, ButtonGreen } from '../../components'
import { API } from '../../API'

class Settings extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      surname: "",
      email: "",
      phone_number: "",
      status: "Offline",
      id: 0,
      listing: {},
      vehicle: null
    }
  }
  componentDidMount(){
    this.getData()
  }
  getData(){
    const { data_user } = this.props.main
    axios({
      url: `${API}${'profile'}`,
      headers: { "Authorization": "Bearer " + data_user.token }
    }).then((res) => {
      console.log(res)
      if(res.data){
        this.setState({...res.data, name: res.data.first_name, surname: res.data.last_name})
      }
    }).catch((err) => this.props.navigation.navigate("ErrorMessage", { error_message: err.message }))
  }
  updateVehicle(item){
    this.setState({vehicle: item})
  }
  render() {
    const { SETTINGS, SUPPORT, SAVE, NAME, EMAIL, PHONE_NUMBER, CALL_RESTAURANT, RESTORAUNT, STATUS, ONLINE, SURNAME } = this.props.language.lang
    const { data_user } = this.props.main
    const { name, email, phone_number, id, listing, surname, status } = this.state
    return (
      <View style={styles.container}>
        <Header title={SETTINGS} props={this.props} hide_search={true} onPressLeft={() => {Keyboard.dismiss(); this.props.navigation.openDrawer()}}/>
        <Wrapper scroll={true}>
          <View style={styles.header}>
            <Text style={styles.user_id}>{"ID #"}{id}</Text>
            <View style={{flex: 1}} />
            <View style={styles.line} />
            <Text style={styles.status_black}>{STATUS}:</Text>
            <Text style={styles.status_green}>{status}</Text>
          </View>

          <Input value={name} placeholder={NAME} onChangeText={(text) => this.setState({name: text})} />
          <Input value={surname} placeholder={SURNAME} onChangeText={(text) => this.setState({surname: text})} />
          <Input value={email} placeholder={EMAIL} onChangeText={(text) => this.setState({email: text})} />
          <Input value={phone_number} placeholder={PHONE_NUMBER} onChangeText={(text) => this.setState({phone_number: text.replace(/[^0-9+]/g, '')})} />

          <TouchableOpacity style={styles.btn_picker} onPress={() => this.props.navigation.navigate("Vehicle", { updateVehicle: this.updateVehicle.bind(this) })}>
            <Text style={styles.btn_picker_title}>{"Seleziona veicolo"}</Text>
            <Icon size={24} name={"chevron-right"} color={"#39C77C"} />
          </TouchableOpacity>

          <ButtonGreen style={{alignSelf: 'center', width: 220}} title={SAVE} onPress={() => this.saveFunc(this.state)} />

          <Text style={[styles.title_align, { color: "#8B8B8B" }]}>{RESTORAUNT}</Text>
          <Text style={styles.title_align}>{listing.name}</Text>
          <Text style={styles.text}>{listing.address}</Text>
          <Text style={styles.title_align}>{CALL_RESTAURANT}</Text>

          <TouchableOpacity style={styles.btn} onPress={() => Communications.phonecall(listing.phone_number, true)}>
            <Image style={{width: 24, height: 24}} source={require('../../img/phone_icon.png')} />
          </TouchableOpacity>

          <Text style={[styles.title_align, { color: '#FF0000', fontSize: 15, fontWeight: 'normal' }]} onPress={() => alert(SUPPORT)}>{SUPPORT}</Text>

          <View style={{height: 20}} />
        </Wrapper>
      </View>
    );
  }
  saveFunc(state){
    const { data_user } = this.props.main
    const { name, email, phone_number, surname, vehicle } = state
    axios({
      url: `${API}${'update_account'}`,
      method: 'post',
      headers: { "Authorization": "Bearer " + data_user.token },
      data: {
        "email": email,
        "first_name": name,
        "last_name": surname,
        "phone_number": phone_number,
        "vehicle": vehicle
      }
    }).then((res) => {
      console.log(res)
      if(res.data.success){
        this.props.navigation.navigate("ErrorMessage", { error_message: res.data.success })
      } else {
        this.props.navigation.navigate("ErrorMessage", { error_message: res.data.error && res.data.message ? res.data.message : "Something went wrong" })
      }
    }).catch((err) => this.props.navigation.navigate("ErrorMessage", { error_message: err.message }))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20
  },
  user_id: {
    color: '#707070',
    fontSize: 18,
    fontFamily: 'Heebo-Medium',
    paddingLeft: 20
  },
  line: {
    width: 1,
    height: 35,
    backgroundColor: 'rgba(112, 112, 112, 0.29)'
  },
  status_black: {
    color: "#000",
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    paddingHorizontal: 9
  },
  status_green: {
    color: "#38C67C",
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: "uppercase"
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    paddingLeft: 48
  },
  subtitle: {
    color: "#707070",
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    paddingLeft: 48,
    paddingBottom: 20,
  },
  flex: {
    flex: 1,
    minHeight: 100
  },
  title_align: {
    color: "#000",
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center'
  },
  text: {
    color: "#707070",
    fontSize: 14,
    fontFamily: 'Helvetica',
    paddingBottom: 8,
    textAlign: 'center',
    alignSelf: 'center'
  },
  btn: {
    width: 114,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#F7F7F7',
    marginVertical: 20,
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowColor: '#d9d9d9',
    shadowOffset: { width: 1, height: 3},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  btn_img: {
    width: 24,
    height: 24
  },
  btn_picker: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
    paddingHorizontal: 16
  },
  btn_picker_title: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Heebo'
  }
})

const mapStateToProps = (state) => {
  return {
    main: state.main,
    language: state.language,
  }
}

export default connect(mapStateToProps)(Settings);
