import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styles } from './styles.js';


export class DestructView extends Component {

	render() {
		return (
			<View style={styles.padded}>
				<Text style={styles.text}>Let go of your material self, forget the physical laws of this world, ignore the biological process of your cells. Listen until nothing remains.</Text>
			</View>
		)
	}
}