
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Keyboard } from "react-native";
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
    const { DEPOSITS, TODAY, DELIVERIES, DELIVERY, CHANGE, TOT_SMALL, OLD_DEPOSITS, HOURS } = this.props.language.lang
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
              <Text style={styles.text}>{data.date ? moment(data.date).format('DD MMM') : ""}</Text>
              <View style={styles.row}>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={styles.delivery}>{DELIVERIES}</Text>
                  <Text style={[styles.text, styles.text_25]}>{data.total_orders && typeof data.total_orders === 'string' ? data.total_orders : 0}</Text>
                </View>
                <View style={{alignItems: 'center', paddingLeft: 30}}>
                  <Text style={styles.delivery}>{HOURS}</Text>
                  <Text style={[styles.text, styles.text_25]}>{data.total_hours && typeof data.total_hours === 'string' ? data.total_hours : 0}</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1}}>
                  <Text style={styles.delivery}>{DELIVERY}</Text>
                  <Text style={[styles.text, styles.text_25]}>{"€ "}{data.total_ammount_revenue && typeof data.total_ammount_revenue === 'string' ? data.total_ammount_revenue : 0}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.change}>
                  <Text style={styles.change_title}>{CHANGE}</Text>
                  <Text style={styles.change_text}>{data.total_ammount_change && typeof data.total_ammount_change === 'string' ? data.total_ammount_change : 0}{" €"}</Text>
                </View>
                <View style={styles.total}>
                  <Text style={styles.total_title}>{TOT_SMALL}</Text>
                  <View style={styles.total_big}>
                    <Text style={styles.total_text}>{"€ "}{data.total_ammount_daily && typeof data.total_ammount_daily === 'string' ? data.total_ammount_daily : 0}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={[styles.text, { padding: 16 }]}>{OLD_DEPOSITS}</Text>
              <Section extraData={data} refreshFunc={() => {}}
                sections={[{title: "", data: data.deposits}]}
                itemFunc={(item, index, section) => {
                  const time = item && item.created_at ? new Date(item.created_at) : new Date()
                  return(
                    <ItemOrder
                      key={index}
                      date={moment(time).format('MMM DD')}
                      delivery={`€${item && item.total_ammount_earns ? item.total_ammount_earns : 0}`}
                      change={`${item && item.total_ammount_change ? item.total_ammount_change : 0}€`}
                      total={`€${item && item.total_ammount_daily ? item.total_ammount_daily : 0}`}
                      deliveries={"12"}
                      deliveries_hours={"3,5h"}
                      delivery_text={DELIVERY}
                      change_text={CHANGE}
                      total_text={TOT_SMALL}
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
  change: {
    paddingLeft: 70
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
    borderRadius: 3,
    padding: 3,
    backgroundColor: '#FF6969',
  },
  total_text: {
    color: '#fff',
    fontSize: 30,
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
