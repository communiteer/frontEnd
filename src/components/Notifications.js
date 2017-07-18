import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View
} from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Header from './common/Header';
import NotificationDetail from './NotificationDetail';

export default class Notifications extends Component {
    state = {
        messages: [{id: 1,GroupName: 'Wacky Races',Message: 'have posted a new job that matches your skill'},
        {id: 2,GroupName: 'Wacky Races',Message: 'have posted a new job that matches your skill'},
        {id: 3,GroupName: 'Wacky Races',Message: 'have posted a new job that matches your skill'}]
    };

    renderMessage() {
        return this.state.messages.map(message =>
            <NotificationDetail key={message.id} message={message} />
        )
    }
    render() {
        return (
            <Card>
                <Header headerText={'Notifications'} />
                <ScrollView>
                    {this.renderMessage()}
                </ScrollView>
            </Card>
        )
    }
}