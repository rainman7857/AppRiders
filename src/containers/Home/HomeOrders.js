
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Platform, ScrollView, Dimensions } from "react-native";
import { connect } from 'react-redux'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Icon from "react-native-vector-icons/Feather";
import firebase from 'react-native-firebase'
import _ from 'lodash'
import moment from 'moment'
import Communications from 'react-native-communications';
import axios from 'axios'
import Carousel from 'react-native-snap-carousel';
import MapViewDirections from 'react-native-maps-directions';

import { Wrapper, Header, Section, CustomSwiper } from '../../components'
import Item from './Item'
import ItemOrder from './ItemOrder'
import { API } from '../../API'

const { width, height } = Dimensions.get("window")

class HomeOrders extends Component {
  constructor(props){
    super(props)
    this.state = {
      ordini: false,
      swiper_index: 0,
    }
  }
  render() {
    const { NEW_ORDERS, FIRST_AND_LAST_DELIVERY, ITEM, ITEMS, PRODUCTS, ORDER, PICK_UP } = this.props.language.lang
    const { top_space, bottom_space } = this.props.main;
    const _styleHeader = {height: 56 + top_space, paddingTop: top_space}
    const { ordini, swiper_index } = this.state
    const { props, state } = this.props;
    const { data, new_orders } = state
    const orders = data && data.orders && Array.isArray(data.orders) ? data.orders : []
    // console.log(data)
    return (
      <ImageBackground style={styles.container} source={require('../../img/map_image.png')}>
        <MapView
           provider={PROVIDER_GOOGLE}
           style={{flex: 1}}
           region={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121,
           }}
         >
           <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
            <Image style={{width: 16, height: 16}} source={require('../../img/iconarider.png')} resizeMode={"contain"} />
           </Marker>
           <MapViewDirections
              origin={{latitude: 37.78825, longitude: -122.4324}}
              destination={{latitude: 37.771707, longitude: -122.4053769}}
              apikey={"AIzaSyAaIlCSyn3yP7iEUa2CDFTHEgjDQey1Iuo"}
            />
         </MapView>
         <View style={styles.absolute}>
           <View style={[styles.header, _styleHeader]}>
             <TouchableOpacity style={styles.button_left} onPress={() => props.navigation.openDrawer()}>
              <Icon color={"#000"} name={"menu"} size={24} />
             </TouchableOpacity>
             <TouchableOpacity style={[styles.ordini, { borderColor: new_orders ? '#FF1414' : 'rgba(112, 112, 112, 0.3)' }]} onPress={() => {
               this.setState({ordini: !ordini})
               if(new_orders && ordini){
                 this.props.offNewOrders()
               }
             }}>
               <Text style={styles.ordini_title}>{"ordini"}</Text>
               <View style={[styles.ordini_line, { backgroundColor: new_orders ? 'rgba(255, 20, 20, 0.3)' : 'rgba(112, 112, 112, 0.3)' }]} />
               <Text style={styles.ordini_title}>{_.size(orders)}</Text>
             </TouchableOpacity>
           </View>

           {ordini ?
             <View style={styles.content}>
               <Wrapper scroll={true}>

                 <View style={[styles.row, { marginVertical: 16 }]}>
                   <View style={styles.col}>
                     <Text style={[styles.text, styles.text_23]}>{NEW_ORDERS}</Text>
                   </View>
                   <View style={[styles.col, styles.col_align]}>
                     <Text style={[styles.text, styles.text_14]}>{FIRST_AND_LAST_DELIVERY}</Text>
                     <Text style={[styles.text, styles.text_22]}>{data && data.time_fist_order ? moment(data.time_fist_order).format("kk:mm") : "00:00"} - {data && data.time_last_order ? moment(data.time_last_order).format("kk:mm") : "00:00"}</Text>
                     <Text style={[styles.text, styles.text_14_bold]}>{data.total_count} {ITEMS}</Text>
                   </View>
                 </View>

                 <Section extraData={orders} refreshFunc={() => {}}
                   sections={[{title: "", data: orders}]}
                   itemFunc={(item, index, section) => {
                     const data_menu = item.items && Array.isArray(item.items) ? item.items : []
                     const count = _.reduce(data_menu, (res, item_a) => res + Number(item_a.qty), 0)
                     return(
                       <Item key={index}
                         title={`${ORDER} #${item.id}`}
                         title_text={`${count} ${PRODUCTS}`}
                         check={item.picked ? true : false}
                         onPress={() => {}}
                         data_menu={data_menu}
                         onPressAccept={() => this.pickUpFunc(item.id)}
                         accept_title={PICK_UP}
                       />
                     )
                   }}
                 />

               </Wrapper>
             </View>
             :
             <View style={styles.block}>
               <TouchableOpacity style={styles.btn_avvia} onPress={() => {}}>
                 <Text style={styles.btn_avvia_title}>{"Start"}</Text>
               </TouchableOpacity>
               <Carousel useScrollView={true}
                 ref={(c) => { this._carousel = c; }}
                 data={orders && Array.isArray(orders) ? orders : []}
                 renderItem={({item, index}) => {
                   const dropoff = item.dropoff ? item.dropoff : {}
                   const data_menu = item.items && Array.isArray(item.items) ? item.items : []
                   return(
                     <ItemOrder
                       title={"Order #" + item.id}
                       page={index + 1}
                       subtitle={dropoff.name}
                       location={dropoff.detailed_address.street_address_1 + ' ' + dropoff.detailed_address.street_address_2}
                       text_product={_.size(data_menu) + " items"}
                       pagato={"Pagato"}
                       pagare={item.payment_method}
                       cash={item.payment_method === 'cash' ? true : false}
                       text_orario={"Delivery time"}
                       text_time={moment(dropoff.dropoff_deadline).format("kk:mm")}
                       title_apri={"Open"}
                       onPressPhone={() => Communications.phonecall(dropoff.phone_number, true)}
                       onPressApri={() => props.navigation.navigate("OrderDetails", { order_id: item.id })}
                       onPress={() => {}}
                     />
                   )
                 }}
                 sliderWidth={width}
                 itemWidth={width - 80}
               />
               {/*orders && Array.isArray(orders) ?
                 <CustomSwiper index={swiper_index} containerStyle={{height: 250, backgroundColor: 'rgba(34, 34, 34, 0)'}} showsButtons={false} showsPagination={false} loop={false}
                    onIndexChanged={(index) => this.setState({swiper_index: index})}
                    refSwiper={(c) => { this.swiper = c }}
                  >
                    {orders.map((item, i) => {
                      const dropoff = item.dropoff ? item.dropoff : {}
                      const data_menu = item.items && Array.isArray(item.items) ? item.items : []
                      return(
                        <View key={i}>
                          <ItemOrder
                            title={"Order #" + item.id}
                            page={i + 1}
                            subtitle={dropoff.name}
                            location={dropoff.detailed_address.street_address_1 + ' ' + dropoff.detailed_address.street_address_2}
                            text_product={_.size(data_menu) + " items"}
                            pagato={"Pagato"}
                            pagare={item.payment_method}
                            paid={false}
                            text_orario={"Delivery time"}
                            text_time={moment(dropoff.dropoff_deadline).format("kk:mm")}
                            title_apri={"Open"}
                            onPressPhone={() => Communications.phonecall(dropoff.phone_number, true)}
                            onPressApri={() => props.navigation.navigate("OrderDetails", { order_id: item.id })}
                            onPress={() => {}}
                          />
                        </View>
                      )
                    })}
                  </CustomSwiper>
                  : null
                */}

              <View style={{height: bottom_space ? bottom_space : 16}} />
             </View>
           }
         </View>
      </ImageBackground>
    );
  }
  pickUpFunc(id){
    const { data_user } = this.props.main
    axios({
      url: `${API}${'order_pickup'}`,
      method: "post",
      headers: { "Authorization": "Bearer " + data_user.token },
      data: { id: id }
    }).then((res) => {
      console.log(res)
      if(res.data.error){
        this.props.navigation.navigate("ErrorMessage", { error_message: res.data.error })
      } else {
        this.setState({ordini: false})
        this.props.refreshData()
      }
    }).catch((err) => this.props.navigation.navigate("ErrorMessage", { error_message: err.message }))
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  absolute: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginTop: 6,
    marginBottom: 24
  },
  button_left: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ordini: {
    width: 145,
    height: 45,
    borderRadius: 23,
    borderWidth: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  ordini_title: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  ordini_line: {
    width: 1,
    height: '90%',
    marginHorizontal: 18
  },
  content: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopRightRadius: 21,
    borderTopLeftRadius: 21,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.16)'
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1
  },
  col_align: {
    alignItems: 'flex-end'
  },
  text: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  text_23: {
    fontSize: 23,
  },
  text_14: {
    fontSize: 14,
    color: '#797979',
  },
  text_22: {
    fontSize: 22,
  },
  text_14_bold: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  block: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    bottom: 0
  },
  btn_avvia: {
    width: 145,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#38C67C',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.06)'
  },
  btn_avvia_title: {
    color: '#fff',
    fontSize: 20,
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

export default connect(mapStateToProps)(HomeOrders);
