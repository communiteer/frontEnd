import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import { Actions } from 'react-native-router-flux';


const ProfilePage = () => {

	return (
		<View style={styles.container}>
			<Text 
				style={styles.profile}>
				PROFILE PAGE
			</Text>
			<Text onPress={() => Actions.addGroup()}>Add Group</Text>
			<Text onPress={() => Actions.addEvent()}>Add Event</Text>
		</View>
	)
};

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bb3000'
	},
	profile: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'	
	}
}



export default ProfilePage;