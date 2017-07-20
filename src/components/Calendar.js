import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import { Actions } from 'react-native-router-flux';


const Calendar = () => {

    return (
       <View style={styles.container}>
         <Text 	style={styles.calendar}>
           CALENDAR BOY!
         </Text>
       </View> 
    )

}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bd3000'
	},
	calendar: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'	
	}
}

export default Calendar

