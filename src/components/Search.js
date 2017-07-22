import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native';
import { FetchAllGroupsInArea, FetchAllEventsInArea } from '../actions'

import { Header, Button, CardSection } from './common';
import GroupCard from './GroupCard';

import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

const areaId = 1;

class Search extends Component {
constructor(props) {
	super(props)
}

	componentDidMount() {
		this.props.fetchAllGroupsInArea()
	//	this.props.fetchAllEventsInArea()
	}

	render() {
		console.log(this.props.groups.groups)
		return (
			<View>
				<Header headerText='Search' />
				<CardSection>
					<Button>Groups</Button>
					<Button>Events</Button>
				</CardSection>
			<ScrollView>
						{this.props.groups.groups.map(group => {
							return (
								<View key={group.id}>
									<GroupCard key={group.id} group={group} />
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
		fetchAllGroupsInArea: () => {
			dispatch(actions.fetchAllGroupsInArea(areaId))
		}
		,
		// fetchAllEventsInArea: () => {
		// 	dispatch(actions.fetchAllEventsInArea(areaId))
		// }
	}
}

const mapStateToProps = (state) => {
	return {
		groups: state.groups
		// ,
		// events: state.events
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
