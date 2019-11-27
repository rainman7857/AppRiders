import React, { Component, PureComponent } from 'react';
import { StyleSheet, View, RefreshControl, Text, SectionList } from 'react-native';

class Section extends PureComponent {
  render(){
    const { extraData, sections, active, refreshFunc, itemFunc } = this.props;
    return(
      <SectionList
        refreshControl={<RefreshControl refreshing={false} onRefresh={() => refreshFunc()} />}
        extraData={extraData}
        sections={sections}
        keyboardShouldPersistTaps="handled"
        renderSectionHeader={({section: {title}}) => {
          if(active){
            return <Text style={styles.default_routes}>{title}</Text>
          } else {
            return null
          }
        }}
        onEndReachedThreshold={0.5}
        removeClippedSubviews={false}
        initialNumToRender={40}
        keyExtractor={(item, index) => index}
        renderItem={({item, index, section}) => {
          return itemFunc(item, index, section)
        }}
      />
    );
  }
}


const styles = StyleSheet.create({
  default_routes: {
    color: '#000',
    fontSize: 23,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
});

export default Section
