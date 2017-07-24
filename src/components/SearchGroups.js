import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native';
import { FetchAllGroupsInArea, FetchAllEventsInArea } from '../actions'

import { Header, Button, CardSection } from './common';
import SearchGroupCard from './SearchGroupCard';

import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

const areaId = 1;

class SearchGroups extends Component {
constructor(props) {
	super(props)
}

	componentDidMount() {

		this.props.fetchAllGroupsInArea()

	}

	render() {
		
		return (
			<View>
			<ScrollView>
						{this.props.groups.groups.map(group => {
							return (
								<View key={group.group_id}>
									<SearchGroupCard group={group} />
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
	}
}

const mapStateToProps = (state) => {
	return {
		groups: state.groups
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchGroups);
