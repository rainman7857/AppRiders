import React, { Component  } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

class Input extends Component {
  render(){
    const { style, placeholder, editable, value, secureTextEntry, keyboardType, returnKeyType, onFocus, onChangeText, numberOfLines, onSubmitEditing, refInput, maxLength, multiline, secure } = this.props;
    return(
      <View style={styles.block}>
        {placeholder && value ? <Text style={styles.text_top}>{placeholder}</Text> : null}
        <View style={[styles.row, style]}>
          <TextInput
            editable={editable}
            style={styles.textInput}
            autoCorrect={false}
            placeholder={placeholder}
            placeholderTextColor='rgba(0, 0, 0, 1)'
            selectionColor='rgba(0, 0, 0, 1)'
            underlineColorAndroid='transparent'
            value={value}
            keyboardType={keyboardType ? keyboardType : 'default'}
            onChangeText={onChangeText}
            returnKeyType={returnKeyType ? returnKeyType : 'done'}
            multiline={multiline}
            onSubmitEditing={onSubmitEditing}
            secureTextEntry={secureTextEntry}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
            onFocus={() => {
              if(typeof onFocus === 'function'){
                this.props.onFocus();
              }
            }}
            ref={(ref) => {
              if(ref){
                this._inputElement = ref;
                if(typeof refInput === 'function'){
                  this.props.refInput(ref);
                }
              }
            }}
          />
          {secure ?
            <TouchableOpacity onPress={() => this.props.onPressSecure()} style={styles.eye_btn}>
              <Icon name="eye" color={'#9b9b9b'} size={20}></Icon>
            </TouchableOpacity>
           : null
         }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: 48,
    paddingHorizontal: 36,
    marginVertical: 12,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth : 1.5,
    borderBottomColor : '#ddd',
  },
  textInput: {
    flex: 1,
    padding: 0,
    color: "#707070",
    fontSize: 18,
    fontFamily: 'Heebo-Regular'
  },
  eye_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    minHeight: 30
  },
  text_top: {
    color: "#000",
    fontSize: 18,
    fontFamily: 'Heebo-Bold'
  }
});

export default Input
