import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';

import { getStatusBarHeight, getBottomSpace } from '../../iphone_helper'

const top_space = getStatusBarHeight(true)
const bottom_space = getBottomSpace()

class Wrapper extends Component {
	render() {
    const { children, footer, refreshFunc, scroll, style, refresh } = this.props;
		return (
			<View style={[styles.container, { ...style }]}>

				{scroll ?
					<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} refreshControl={refresh === false ? null : <RefreshControl refreshing={false} onRefresh={() => {
						if(typeof refreshFunc === 'function'){
							refreshFunc()
						}
					}} />}>
						{children}
						<View style={{height: bottom_space + 20}} />
					</ScrollView>
					:
					<View style={styles.flex}>{children}</View>
				}

				{footer}

			</View>
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#fff'
  },
	flex: {
		flex: 1
	}
});

export default Wrapper
