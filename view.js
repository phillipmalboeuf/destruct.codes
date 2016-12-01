import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { styles } from './styles.js';


export class DestructView extends Component {

	render() {
		return (
			<ScrollView>
				<Image style={styles.image} resizeMode='contain' source={require('./assets/images/logo.png')}/>
				<Text style={[styles.padded, styles.text]}>Let go of your material self, forget the physical laws of this world, ignore the biological process of your cells. Listen until nothing remains.</Text>
			</ScrollView>
		)
	}
}