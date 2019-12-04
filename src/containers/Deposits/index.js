
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Keyboard, Alert } from "react-native";
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'
import axios from 'axios'

import { API } from '../../API'
import { Header, Wrapper, Section } from '../../components'
import ItemOrder from './ItemOrder'

class Deposits extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {},
      fetching: true,
    }
  }
  componentDidMount(){
    this.getData()
  }
  getData(){
    const { data_user } = this.props.main
    axios({
      url: `${API}${"deposits"}`,
      method: 'get',
      headers: { Authorization: 'Bearer ' + data_user.token }
    }).then((res) => {
      console.log(res)
      this.setState({data: res.data, fetching: false})
    }).catch((err) => this.props.navigation.navigate('ErrorMessage', { error_message: err.message }))
  }
  render() {
    const { DEPOSITS, TODAY, DELIVERIES, DELIVERY, CHANGE, TOT_SMALL, OLD_DEPOSITS, HOURS, CREATED, RETURNED, RETURN } = this.props.language.lang
    const { data_user } = this.props.main
    const { data = {}, fetching } = this.state
    console.log(data)
    return (
      <View style={styles.container}>
        <Header title={DEPOSITS} props={this.props} hide_search={true} onPressLeft={() => this.props.navigation.openDrawer()}/>
        {fetching ? null
          :
          <Wrapper scroll={true}>
            <View style={styles.top}>
              <Text style={styles.text}>{data.date ? data.date : ""}</Text>
              <View style={styles.row}>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={styles.delivery}>{DELIVERIES}</Text>
                  <Text style={[styles.text, styles.text_25]}>{data.total_orders ? data.total_orders : 0}</Text>
                </View>
                <View style={{alignItems: 'center', paddingLeft: 30}}>
                  <Text style={styles.delivery}>{DELIVERY}</Text>
                  <Text style={[styles.text, styles.text_25]}>{data.total_amount_orders ? data.total_amount_orders : 0}</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1}}>
                  <Text style={styles.delivery}>{CHANGE}</Text>
                  <Text style={[styles.text, styles.text_25]}>{data.total_amount_deposits ? data.total_amount_deposits : 0}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.return_btn} onPress={() => this.returnFunc()}>
                  <Text style={styles.return_btn_title}>{RETURN}</Text>
                </TouchableOpacity>
                <View style={styles.total}>
                  <Text style={styles.total_title}>{TOT_SMALL}</Text>
                  <View style={styles.total_big}>
                    <Text style={styles.total_text}>{data.total_amount_revenue ? data.total_amount_revenue : 0}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={[styles.text, { padding: 16 }]}>{OLD_DEPOSITS}</Text>
              <Section extraData={data} refreshFunc={() => {}}
                sections={[{title: "", data: data.deposits && Array.isArray(data.deposits) ? data.deposits : [] }]}
                itemFunc={(item, index, section) => {
                  return(
                    <ItemOrder
                      key={index}
                      created_title={CREATED}
                      created_text={item.created_at ? item.created_at : ""}
                      returned_title={RETURNED}
                      returned_text={item.registered_at ? item.registered_at : ""}
                      total_title={TOT_SMALL}
                      total={`${item && item.amount ? item.amount : 0}`}
                    />
                  )
                }}
              />
            </View>
          </Wrapper>
        }
      </View>
    );
  }
  returnFunc(){
    Alert.alert('Are you sure to return this deposit.', 'The data will be reset for the next turn.', [
        {text: 'Not now', style: 'cancel'},
        {text: 'Return', onPress: () => this.depositRegister()},
    ]);
  }
  depositRegister(){
    const { data_user } = this.props.main
    axios({
      url: `${API}${"deposit_register"}`,
      method: 'PUT',
      headers: { Authorization: 'Bearer ' + data_user.token }
    }).then((res) => {
      console.log(res)
      if(res.data.message){
        this.props.navigation.navigate('ErrorMessage', { error_message: typeof res.data.message === 'string' ? res.data.message : "Error" })
      }
    }).catch((err) => this.props.navigation.navigate('ErrorMessage', { error_message: err.message }))
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
    padding: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.16)'
  },
  text: {
    color: "#000",
    fontSize: 25,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingLeft: 16
  },
  delivery: {
    color: '#7E7E7E',
    fontSize: 12,
    fontFamily: "Helvetica",
    fontWeight: 'bold'
  },
  text_25: {
    fontSize: 30,
  },
  change_title: {
    color: '#7E7E7E',
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  change_text: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  total: {
    alignItems: 'flex-end',
  },
  total_title: {
    color: '#7E7E7E',
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  total_big: {
    padding: 3,
  },
  total_text: {
    color: '#3AC87C',
    fontSize: 30,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  return_btn: {
    width: 133,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#FF5D5D',
  },
  return_btn_title: {
    color: '#fff',
    fontSize: 15,
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

export default connect(mapStateToProps)(Deposits);
