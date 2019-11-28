
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Keyboard } from "react-native";
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'
import axios from 'axios'

import { API } from '../../API'
import { Header, Wrapper, Section } from '../../components'
import ItemOrder from './ItemOrder'

class Ordini extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      fetching: true,
    }
  }
  componentDidMount(){
    this.getData()
  }
  getData(){
    const { data_user } = this.props.main
    axios({
      url: `${API}${'orders'}`,
      method: "get",
      headers: { "Authorization": "Bearer " + data_user.token }
    }).then((res) => {
      console.log(res)
      this.setState({data: res && res.data ? res.data : [], fetching: false})
    }).catch((err) => {
      console.log(err)
    })
  }
  render() {
    const { ORDINI, PAID, CASH, DELIVERING, CANCELLED, DELIVERY_TIME, DELIVERED } = this.props.language.lang
    const { data_user } = this.props.main
    const { data, fetching } = this.state
    const new_data = fetching ? [] : data ? _.groupBy(data, 'created_at') : []
    const sections = _.reduce(new_data, (res, item, key) => {
      const str_date = moment(key)
      const date = moment(str_date).format('DD MMMM')
      return [...res, {title: date, data: item}]
    }, [])
    return (
      <View style={styles.container}>
        <Header title={ORDINI} props={this.props} hide_search={true} onPressLeft={() => this.props.navigation.openDrawer()}/>
        <Wrapper>
          <View style={styles.content}>
            <Section extraData={data} refreshFunc={() => {}}
              sections={sections}
              active={true}
              itemFunc={(item, index, section) => {
                return(
                  <ItemOrder
                    key={index}
                    order={item.id}
                    delivery_text={DELIVERY_TIME}
                    time={item.pickup_deadline ? moment(item.pickup_deadline).format('hh:mm A') : null}
                    color={item.status_color ? item.status_color : "#fff"}
                    status_title={item.status ? item.status : ""}
                    money={item.total_price}
                    money_text={item.payment_method}
                    onPress={() => this.props.navigation.navigate("OrderDetails", { order_id: item.id, delivered: true })}
                  />
                )
              }}
            />
          </View>
        </Wrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f7"
  },
  content: {
    flex: 1,
  }
})

const mapStateToProps = (state) => {
  return {
    main: state.main,
    language: state.language,
  }
}

export default connect(mapStateToProps)(Ordini);
