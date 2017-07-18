import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View
} from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Header from './common/Header';
import GroupCard from './GroupCard'

export default class MyGroups extends Component {
    state = {
        groups: [{id:1,groupName: 'Wackey Races',groupBanner:'https://s1.postimg.org/nkt54pa4f/Wacky-_Races-2016-title.png',admin:'Dick Dasterdly'},
        {id:2,groupName: 'Wackey Races',groupBanner:'https://s1.postimg.org/nkt54pa4f/Wacky-_Races-2016-title.png',admin:'Dick Dasterdly'},
        {id:3,groupName: 'Wackey Races',groupBanner:'https://s1.postimg.org/nkt54pa4f/Wacky-_Races-2016-title.png',admin:'Dick Dasterdly'}]
    }

    renderGroups() {
        return this.state.groups.map(group =>
            <GroupCard key={group.id} group={group} />)
    }
    render() {
        return (
            <Card>
                <ScrollView>
                <Header headerText={'My Groups'} />
                    {this.renderGroups()}
                </ScrollView>
            </Card>
        )
    }
}