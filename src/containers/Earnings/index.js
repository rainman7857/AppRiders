
import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, Keyboard } from "react-native";
import { connect } from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import Icon from "react-native-vector-icons/Feather";

import { API } from '../../API'
import { Header, Wrapper, Input, ButtonGreen } from '../../components'
import { errorMessage } from '../../actions/Func'

class Earnings extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
    }
  }
  render() {
    const { RESET_PASSWORD, EMAIL_ADDRESS, RESET, RESET_TEXT } = this.props.language.lang
    const { data_user } = this.props.main
    return (
      <View style={styles.container}>
        <Header props={this.props} hide_search={true} onPressLeft={() => this.props.navigation.openDrawer()}/>
        <Wrapper>
          <View style={styles.header}>
            <Text style={styles.header_title}>{"Hello "}{data_user.first_name}</Text>
            <Text style={styles.header_text}>{moment().format('DD MMM YYYY')}</Text>
          </View>

          <View style={styles.top_block}>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.col_title}>{"$"} <Text style={{fontSize: 40}}>{"0"}</Text> {"00"}</Text>
                <Text style={styles.col_title}>{'Total Earnings'}</Text>
              </View>
              <View style={styles.col}>
                <Text style={[styles.col_title, { fontSize: 40 }]}>{"0"}</Text>
                <Text style={styles.col_title}>{'Orders'}</Text>
              </View>
            </View>

          </View>

          <View style={styles.row}>
            <Text style={styles.row_title}>{"Statements"}</Text>
            <Text style={styles.row_text_green}>{"More Info"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.row_subtitle}>{"Invoice History"}</Text>
            <Icon name="chevron-right" color={'#23BC7D'} size={20}></Icon>
          </View>

          <View style={styles.row}>
            <Text style={styles.row_title}>{"Activity"}</Text>
            <Text style={styles.row_text_green}>{"More Info"}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.row_subtitle}>{"All Activity"}</Text>
            <Icon name="chevron-right" color={'#23BC7D'} size={20}></Icon>
          </View>

        </Wrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#23BC7D",
    padding: 16,
    paddingBottom: 46
  },
  header_title: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'OpenSans-Regular',
  },
  header_text: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  top_block: {
    top: -30,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 6
  },
  col: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  col_title: {
    color: '#23BC7D',
    fontWeight: 'bold',
    fontSize: 15,
  },
  row_title: {
    fontFamily: 'OpenSans-Regular',
    color: '#000',
    fontSize: 18
  },
  row_text_green: {
    fontFamily: 'OpenSans-Regular',
    color: '#23BC7D',
    fontSize: 14
  },
  row_subtitle: {
    color: '#000',
    fontSize: 15
  }
})

const mapStateToProps = (state) => {
  return {
    main: state.main,
    language: state.language,
  }
}

export default connect(mapStateToProps, { errorMessage })(Earnings);
