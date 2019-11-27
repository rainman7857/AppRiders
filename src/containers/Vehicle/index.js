import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'

import { Header, Wrapper, Section } from '../../components'

class Vehicle extends Component {
  render() {
    const { VEHICLE, BIKE, CAR, SCOOTER, WALKER } = this.props.language.lang
    const { vehicle_id } = this.props.main
    const data = [BIKE, CAR, SCOOTER, WALKER]
    return (
      <Wrapper>
        <Header title={VEHICLE} style={{backgroundColor: '#fff'}} props={this.props} hide_search={true} icon={"arrow-left"} color={"#000"} onPressLeft={() => this.props.navigation.goBack()} />
        <Section extraData={data} refreshFunc={() => {}}
          sections={[{title: "", data: data}]}
          itemFunc={(item, index, section) => {
            return(
              <TouchableOpacity key={index} style={styles.item} onPress={() => {
                this.props.navigation.state.params.updateVehicle(item, index)
                this.props.navigation.goBack()
              }}>
                <Text style={styles.item_title}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  item_title: {
    color: "#000",
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

export default connect(mapStateToProps)(Vehicle);
