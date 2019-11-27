
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Keyboard, Platform, Alert } from "react-native";
import { connect } from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import Icon from "react-native-vector-icons/Feather";
import Communications from 'react-native-communications';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import _ from 'lodash'

import { API } from '../../API'
import { Header, Wrapper, Input, ButtonGreen, Fetch } from '../../components'
import { errorMessage } from '../../actions/Func'
import ItemMenu from './ItemMenu'

class OrderDetails extends Component {
  constructor(props){
    super(props)
    const delivered = this.props.navigation.getParam("delivered")
    this.state = {
      delivered: delivered ? false : false,
      data: {},
      fetching: true
    }
  }
  componentDidMount(){
    this.getData()
  }
  getData(){
    const { data_user } = this.props.main
    const order_id = this.props.navigation.getParam("order_id")
    axios({
      url: `${API}${'orders?id='}${order_id}`,
      headers: { "Authorization": "Bearer " + data_user.token }
    }).then((res) => {
      console.log(res)
      this.setState({data: res.data ? res.data : {}, fetching: false})
    }).catch((err) => this.props.navigation.navigate("ErrorMessage", { error_message: err.message }))
  }
  render() {
    const { DELIVERIES, ORDER, PAID, SUPPORT, CASH, DELIVERED } = this.props.language.lang
    const { data_user } = this.props.main
    const { delivered, data, fetching } = this.state
    const order_id = this.props.navigation.getParam("order_id")
    const dropoff = data && data.dropoff ? data.dropoff : {}
    return (
      <View style={styles.container}>
        <Header title={ORDER + " #" + order_id} props={this.props} icon={"arrow-left"} color={"#38C67C"} hide_search={true} onPressLeft={() => this.props.navigation.goBack()}/>
        <Wrapper scroll={fetching ? false : true}>
          {fetching ? <Fetch type={"flex"} />
            :
            <View style={styles.content}>
              {delivered ?
                <View style={[styles.top, styles.top_row]}>
                  <View style={styles.col}>
                    <Text style={styles.time_title}>{"Delivery time"}</Text>
                    <Text style={styles.time_text}>{data && data.pickup_ready ? moment(data.pickup_ready).format("kk:mm") : "00:00"}</Text>
                  </View>
                  <View style={styles.col}>
                    <Text style={styles.time_title}>{"delivered"}</Text>
                    <Text style={styles.time_text}>{data && data.pickup_deadline ? moment(data.pickup_deadline).format("kk:mm") : "00:00"}</Text>
                  </View>
                </View>
                :
                <View style={styles.top}>
                  <Text style={styles.top_title}>{dropoff.name}</Text>
                  <Text style={styles.top_subtitle}>{dropoff.address}</Text>
                  <View style={[styles.row, { marginVertical: 16, justifyContent: 'space-between'}]}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.text_small}>{"Travel time"}</Text>
                      <Text style={styles.title_small}>{"15"}<Text style={{fontSize: 8}}>{"min"}</Text></Text>
                      <Text style={styles.text_small}>{"Arrival time"}</Text>
                      <Text style={styles.title_small}>{data && data.pickup_ready ? moment(data.pickup_ready).format("kk:mm") : "00:00"}</Text>
                    </View>

                    <View style={styles.map}>
                      <MapView
                         provider={PROVIDER_GOOGLE}
                         style={{width: '100%', height: '100%'}}
                         region={{
                           latitude: dropoff.location && dropoff.location.lat && typeof dropoff.location.lat === 'numeric' ? Number(dropoff.location.lat) : 37.78825,
                           longitude: dropoff.location && dropoff.location.lng && typeof dropoff.location.lng === 'numeric' ? Number(dropoff.location.lng) : -122.4324,
                           latitudeDelta: 0.015,
                           longitudeDelta: 0.0121,
                         }}
                       />
                    </View>
                    <TouchableOpacity style={styles.btn_phone} onPress={() => Communications.phonecall(dropoff.phone_number, true)}>
                      <Image style={styles.btn_phone_icon} source={require('../../img/phone_icon.png')} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.time_title}>{"Delivery time"}</Text>
                  <Text style={styles.time_text}>{data.pickup_deadline ? moment(data.pickup_deadline).format("kk:mm") : null}</Text>
                </View>
              }

              <View style={styles.menu}>
                <View style={styles.line} />
                <Text style={styles.menu_title}>{"Items and payment"}</Text>
                {data && data.items && Array.isArray(data.items) ?
                  data.items.map((item, i) => {
                    const names_and_price = _.reduce(item.variants, (res, itm) => {
                      return {...res, price: res.price + (itm.price ? Number(itm.price) : 0), data: [...res.data, item.name]}
                    }, { price: 0, data: [] })
                    return(
                      <ItemMenu key={i}
                        count={1}
                        name={item.name}
                        price={names_and_price.price + ' €'}
                        data={names_and_price.data}
                      />
                    )
                  })
                  :
                  null
                }
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                  <Text style={styles.menu_subtitle}>{"Delivery cost"}</Text>
                  <Text style={styles.menu_text}>{data.purchase_fee}{"€"}</Text>
                </View>
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                  <Text style={styles.menu_subtitle}>{"Rider tip"}</Text>
                  <Text style={styles.menu_text}>{"0,0€"}</Text>
                </View>
                <View style={styles.line} />
                <View style={[styles.row, { justifyContent: 'space-between' }]}>
                  <Text style={[styles.menu_subtitle, { color: '#000' }]}>{"Total"}</Text>
                  <Text style={styles.menu_text}>{data.total_price}{"€"}</Text>
                </View>
                <View style={[styles.paid, { backgroundColor: data.payment_method === 'cash' ? "#FF6969" : "#38C67C"}]}>
                  <Text style={styles.paid_text}>{data.payment_method}</Text>
                </View>
              </View>

              <View style={styles.block}>
                <View style={styles.line} />
                <Text style={styles.menu_title}>{"Info for the rider"}</Text>
                <Text style={[styles.menu_title, { fontSize: 14, fontWeight: 'bold' }]}>{""}</Text>
              </View>

              {delivered ?
                <View style={styles.footer}>
                  <Text style={styles.delivered_text}>{DELIVERED}</Text>
                  <View style={styles.delivered_view}>
                    <Icon name={"check"} color={"#fff"} size={30} />
                  </View>
                </View>
                :
                <View style={styles.footer}>
                  <TouchableOpacity style={styles.btn_green} onPress={() => this.deliveryFunc()}>
                    <Text style={styles.btn_green_title}>{"Consegnato"}</Text>
                  </TouchableOpacity>
                  <Text style={[styles.text, styles.text_red]}>{SUPPORT}</Text>
                </View>
              }
            </View>
          }
        </Wrapper>
      </View>
    );
  }
  deliveryFunc(){
    Alert.alert('Are you sure ?', 'Do you want to delivery the order ?', [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Yes', onPress: () => this.setState({delivered: true})},
    ]);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f7"
  },
  content: {
    flex: 1,
  },
  top: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    paddingBottom: 0
  },
  top_title: {
    color: '#000',
    fontSize: 26,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  top_subtitle: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  col: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_phone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.10)',
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowColor: '#d9d9d9',
    shadowOffset: { width: 1, height: 3},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  btn_phone_icon: {
    width: 24,
    height: 24
  },
  line: {
    width: '100%',
    height: 1.5,
    backgroundColor: '#E4E4E4',
    marginVertical: 4
  },
  map: {
    width: 78,
    height: 78,
    borderRadius: 39,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    // backgroundColor: "#61B5DB"
  },
  text_small: {
    color: '#707070',
    fontSize: 12,
    fontFamily: 'Helvetica',
    paddingTop: 10
  },
  title_small: {
    color: '#707070',
    fontSize: 19,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  menu: {
    flex: 1,
    paddingHorizontal: 16
  },
  menu_title: {
    color: '#7E7E7E',
    fontSize: 11,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    alignSelf: 'center'
  },
  menu_subtitle: {
    color: '#7E7E7E',
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  menu_text: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'Helvetica',
  },
  block: {
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
    paddingHorizontal: 16
  },
  btn_green: {
    width: 220,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38C67C',
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.06)'
  },
  btn_green_title: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  paid: {
    width: 90,
    height: 22,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 24,
  },
  paid_text: {
    color: '#fff',
    fontSize: 9,
    fontFamily: "Helvetica",
    fontWeight: 'bold'
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
  },
  footer: {
    flex: 1,
    alignItems: 'center'
  },
  delivered_text: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Heebo-Medium',
    marginTop: 16
  },
  delivered_view: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38C67C',
    marginBottom: 30,
    marginTop: 5,
  },
  top_row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  col: {
    paddingHorizontal: 35,
    alignItems: 'center',
    paddingBottom: 48
  },
  time_title: {
    color: '#707070',
    fontSize: 14,
    fontFamily: 'Heebo-Light',
  },
  time_text: {
    color: '#000',
    fontSize: 34,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state) => {
  return {
    main: state.main,
    language: state.language,
  }
}

export default connect(mapStateToProps, { errorMessage })(OrderDetails);
