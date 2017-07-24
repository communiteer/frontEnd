import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native';
import { fetchAllEventsInArea } from '../actions'

import { Header, Button, CardSection } from './common';
import EventCard from './EventCard';

import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

const areaId = 1;

class SearchEvents extends Component {
constructor(props) {
	super(props);

}

	componentDidMount() {
		this.props.fetchAllEventsInArea()
	}

	render() {
		
		return (
			<View>
			<ScrollView>
						{this.props.events.events.map(event => {
							return (
								<View key={event.event_id}>
									<EventCard event={event} />
								</View>
							)
						})}
			</ScrollView>

			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllEventsInArea: () => {
			dispatch(actions.fetchAllEventsInArea(areaId))
		}
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.events
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchEvents);

