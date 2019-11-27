import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Platform } from 'react-native';
import { connect } from 'react-redux';

class Fetch extends Component {
  render(){
    const { type, color, size, style } = this.props;
    if(type === 'flex'){
      return(
        <View style={styles.fetching_flex}>
          <ActivityIndicator size={size ? size : 'large'} color={color ? color : '#38C67C'} style={[style]} />
        </View>
      )
    } else {
      return(
        <View style={styles.fetching_absolute}>
          <View style={styles.fetching_white_block}>
            <ActivityIndicator size={size ? size : 'large'} color={color ? color : '#38C67C'} style={{margin: 10, marginRight: Platform.OS === 'ios' ? 7 : 10, marginBottom: Platform.OS === 'ios' ? 7 : 10}} />
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  fetching_flex: {
    flex: 1,
    justifyContent: 'center'
  },
  fetching_absolute: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    zIndex: 9999
  },
  fetching_white_block: {
    borderRadius: 100,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => {
  return {
    main: state.main,
    home: state.home
  }
}

export default connect(mapStateToProps)(Fetch);
