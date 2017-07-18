import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import CreateGroups from './components/CreateGroups';
import ProfilePage from './components/ProfilePage';
import AddEvent from './components/AddEvent';
import Notifications from './components/Notifications';
import GroupPage from './components/GroupPage';
import MyGroups from './components/MyGroups';

class App extends Component {
    render() {
        return (
<MyGroups />
          
        );
    };
}

export default App;
