import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, ScrollView } from 'react-native';

import { Header, Button, CardSection } from './common';
import EventCard from './EventCard';

import { Actions } from 'react-native-router-flux';


const state = {
	events: [{ name: 'event1', date: 'somedate1', skills: 'someskills1' },
	{ name: 'event2', date: 'somedate1', skills: 'someskills1' },
	{ name: 'event3', date: 'somedate1', skills: 'someskills1' },
	{ name: 'event4', date: 'somedate1', skills: 'someskills1' },
	{ name: 'event5', date: 'somedate1', skills: 'someskills1' },
	{ name: 'event6', date: 'somedate1', skills: 'someskills1' },
	{ name: 'event7', date: 'somedate1', skills: 'someskills1' },
	{ name: 'event8', date: 'somedate1', skills: 'someskills1' },
	{ name: 'event9', date: 'somedate1', skills: 'someskills1' },
	{ name: 'event10', date: 'somedate1', skills: 'someskills1' }]
}
class Search extends Component {

	render() {
		return (
			<View>
				<Header headerText='Search' />
				<CardSection>
					<Button>Groups</Button>
					<Button>Events</Button>
				</CardSection>
				<ScrollView>
					{state.events.map(event => {
						return <EventCard key={event.name} event={event} />
					})}
				</ScrollView>
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bb3000'
	},
	search: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'
	}
}

export default Search;
