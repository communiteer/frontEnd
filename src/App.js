import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	PixelRatio,
	View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Scene, Router } from 'react-native-router-flux'

import ProfilePage from './components/ProfilePage';
import MyGroups from './components/MyGroups';
import Calendar from './components/Calendar';
import Notifications from './components/Notifications';
import Search from './components/Search';
import AddEvent from './components/AddEvent';
import AddGroup from './components/AddGroup';
import EventCard from './components/EventCard';


function CalendarIcon(props) {
	return (
		<View>
			<Icon name="calendar" size={30} color="#900" />
		</View>
	)
}


function GroupsIcon(props) {
	return (
		<View>
			<Icon name="group" size={30} color="#900" />
		</View>
	)
}

function HomeIcon(props) {
	return (
		<View>
			<Icon name="home" size={30} color="#900" />
		</View>
	)
}

function NotificationsIcon(props) {
	return (
		<View>
			<Icon name="flag" size={30} color="#900" />
		</View>
	)
}

function SearchIcon(props) {
	return (
		<View>
			<Icon name="search" size={30} color="#900" />
		</View>
	)
}


class App extends Component {
render () {
	return (
		<Router>
			<Scene key="root">
				<Scene
					key="tabbar"
					tabs
				>

					<Scene tabs key="calendar" title="CALENDAR" icon={CalendarIcon} component={Calendar} hideNavBar>
					</Scene>

					<Scene tabs key="myGroups" title="GROUPS" icon={GroupsIcon} component={MyGroups} hideNavBar>
					</Scene>

					<Scene tabs initial key="home" title="HOME" icon={HomeIcon} component={ProfilePage} hideNavBar>
					</Scene>

					<Scene tabs key="notifications" title="NOTIFICATIONS" icon={NotificationsIcon} component={Notifications} hideNavBar>
					</Scene>

					<Scene tabs key="search" title="SEARCH" icon={SearchIcon} component={Search} hideNavBar>
					</Scene>

				</Scene>
						<Scene key="addGroup" component={AddGroup} title="Add Group!"/>
						<Scene key="addEvent" component={AddEvent} title="Add Event!"/>
						<Scene key="anEvent" component={EventCard} title="The Event"/>
			</Scene>
		</Router>
	);

}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FcFF'
	},
	appText: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'
	}
}

export default App;

