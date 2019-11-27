import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";
import { connect } from 'react-redux'
import axios from 'axios'
import _ from 'lodash'

import { API } from '../../API'
import { Wrapper, Header, ButtonGreen, Fetch } from '../../components'
import HomeOrders from './HomeOrders'

const { width, height } = Dimensions.get('window')

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      online: false,
      new_orders: false,
      data: {},
      loading_status: true,
      loading_orders: true,
    }
    this.socket =  new WebSocket("ws://165.22.207.83:3000/socket/php-socket.php");
  }
  componentDidMount(){
    const { data } = this.state
    this.getData()
    this.getStatus()
    this.socket.onopen = () => {console.log('connected')}
    this.socket.onmessage = (evt) => {
      console.log('evt', evt.data)
      const message = JSON.parse(evt.data)
      console.log(message)
      this.setState({data: {...data, orders: [...data.orders, ...message]}, new_orders: true})
    }
    this.socket.onclose = () => {console.log('disconnected')}
  }
  getData(){
    const { data_user } = this.props.main
    axios({
      url: `${API}${'home'}`,
      headers: { "Authorization": "Bearer " + data_user.token }
    }).then((res) => {
      console.log(res)
      if(res.data.error){
        this.props.navigation.navigate("ErrorMessage", { error_message: res.data.error })
        this.setState({loading_orders: false})
      } else if(res.data){
        this.setState({data: res.data, loading_orders: false})
      } else {
        this.setState({loading_orders: false})
      }
    }).catch((err) => {
      this.props.navigation.navigate("ErrorMessage", { error_message: err.message })
      this.setState({loading_orders: false})
    })
  }
  getStatus(){
    const { data_user } = this.props.main
    axios({
      url: `${API}${'get_status'}`,
      headers: { "Authorization": "Bearer " + data_user.token }
    }).then((res) => {
      if(res.data && res.data.status === "Online"){
        this.setState({online: true, loading_status: false})
      } else {
        this.setState({loading_status: false})
      }
    }).catch((err) => this.setState({loading_status: false}))
  }
  render() {
    const { HOME, ONLINE, OFFLINE, NO_NEW_ORDERS, WAITING_FOR_NEW_ORDERS } = this.props.language.lang
    const { online, data, loading_status, loading_orders } = this.state
    const orders = data && data.orders && Array.isArray(data.orders) ? data.orders : []
    if(_.size(orders) && online){
      return(
        <HomeOrders props={this.props} state={this.state} refreshData={() => this.getData()} offNewOrders={() => this.setState({new_orders: false})} />
      )
    } else {
      return (
        <ImageBackground style={styles.container} source={loading_status || loading_orders ? null : require('../../img/map_image.png')}>
          <Header style={{backgroundColor: 'transparent'}} props={this.props} onPressLeft={() => this.props.navigation.openDrawer()} />
          {loading_status || loading_orders ? null : <ButtonGreen styleContainer={styles.btn} style={{alignSelf: 'flex-end', backgroundColor: online ? "#38C67C" : "#FF6060"}} title={online ? ONLINE : OFFLINE} disabled={true} />}
          {loading_status || loading_orders ? <Fetch type={"flex"} />
            :
            <View style={styles.content}>
              <Text style={styles.no_orders}>{online ? WAITING_FOR_NEW_ORDERS : NO_NEW_ORDERS}</Text>
            </View>
          }
        </ImageBackground>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: "100%"
  },
  content: {
    flex: 1,
    paddingTop: height / 4
  },
  no_orders: {
    color: "#000",
    fontSize: 25,
    fontFamily: 'Heebo-Bold',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  btn: {
    height: 40,
    paddingHorizontal: 16
  }
})

const mapStateToProps = (state) => {
  return {
    main: state.main,
    language: state.language,
  }
}

export default connect(mapStateToProps)(Home);
