import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


class DestructView extends Component {

	render() {
		return (
			<View style={styles.view}>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: '#FFF'
	},
	heading: {
		fontSize: 20,
    	textAlign: 'center'
	}
})

module.exports = DestructView;