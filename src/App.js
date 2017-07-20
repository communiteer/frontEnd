import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	PixelRatio,
	View
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux'

import ProfilePage from './components/ProfilePage';
import MyGroups from './components/MyGroups';
import Calendar from './components/Calendar';
import Notifications from './components/Notifications';
import Search from './components/Search';


const TabIcon = ({ selected, title }) => {
	return (
		<Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
	);
};

const App = () => {

	return (
		<Router>
			<Scene key="root" style={styles.container}>
				<Scene
					key="tabbar"
					tabs
					tabBarStyle={styles.tabBar}
				>

					<Scene key="calendar" title="CALENDAR" icon={TabIcon}>
						<Scene
							key="calendar"
							component={Calendar}
							title="Calendar"
							initial
						/>
					</Scene>

					<Scene key="myGroups" title="GROUPS" icon={TabIcon}>
						<Scene
							key="myGroups"
							component={MyGroups}
							title="My Groups"
						/>
					</Scene>

					<Scene key="home" title="HOME" icon={TabIcon}>
						<Scene
							key="profilePage"
							component={ProfilePage}
							title="Profile Page"
							initial
						/>
					</Scene>

					<Scene key="notifications" title="NOTIFICATIONS" icon={TabIcon}>
						<Scene
							key="notifications"
							component={Notifications}
							title="Notifications"
						/>
					</Scene>

					<Scene key="search" title="SEARCH" icon={TabIcon}>
						<Scene
							key="search"
							component={Search}
							title="Search"
						/>
					</Scene>

				</Scene>
			</Scene>
		</Router>
	);
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
