
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		fontFamily: "HK Grotesk Pro"
	},
	image: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height/2
	},
	padded: {
		padding: 40
	}
})