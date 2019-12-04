import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'

import { Header, Wrapper, Section } from '../../components'

class Vehicle extends Component {
  constructor(props){
    super(props)
    const vehicle = this.props.navigation.getParam("vehicle")
    this.state = {
      vehicle: vehicle
    }
  }
  render() {
    const { VEHICLE, BIKE, CAR, SCOOTER, WALKER } = this.props.language.lang
    const { vehicle } = this.state
    const data = [BIKE, CAR, SCOOTER, WALKER]
    return (
      <Wrapper>
        <Header title={VEHICLE} style={{backgroundColor: '#fff'}} props={this.props} hide_search={true} icon={"arrow-left"} color={"#000"}
          onPressLeft={() => {
            this.props.navigation.state.params.updateVehicle(vehicle)
            this.props.navigation.goBack()
          }}
        />
        <Section extraData={data} refreshFunc={() => {}}
          sections={[{title: "", data: data}]}
          itemFunc={(item, index, section) => {
            return(
              <TouchableOpacity key={index} style={styles.item} onPress={() => this.setState({vehicle: item.toLowerCase()})}>
                <Text style={styles.item_title}>{item}</Text>
                {vehicle === item.toLowerCase() ? <Text style={styles.item_check}>{"✓"}</Text> : <View />}
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  item_title: {
    color: "#000",
    fontSize: 14,
    fontFamily: 'Heebo'
  },
  item_check: {
    color: "#000",
    fontSize: 20,
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
