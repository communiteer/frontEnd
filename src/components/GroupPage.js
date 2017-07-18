import React, { Component } from 'react';
import { Text, View, Image, Linking, ScrollView } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Header from './common/Header';
import Input from './common/Input';
import Button from './common/Button';
import PlusButton from './common/PlusButton';
import EventCard from './EventCard'

class GroupPage extends Component {
    state = {
        events: [{ id: 1, eventName: 'Beat the Clock to Yellow Rock', date: '14/09/2017' },
        { id: 2, eventName: 'See-Saw to Arkansas', date: '12/11/2017' },
        { id: 3, eventName: 'The Dipsy Doodle Desert Derby', date: '24/12/2017' }]
    }
    renderEvent() {
        return this.state.events.map(event =>
            <EventCard key={event.id} event={event} />
        )
    }
    render() {
        const { imageStyle, textBoxStyle } = styles;

        return (
                <Card>
                    <Header headerText={'Wacky Races'} />
                    <CardSection>
                        <Image style={imageStyle} source={{ uri: 'https://s1.postimg.org/nkt54pa4f/Wacky-_Races-2016-title.png' }} />
                    </CardSection>
                    <CardSection>
                        <Button>View Leaderboard</Button>
                    </CardSection>
                    <CardSection>
                        <Text>Add Event</Text>
                        <Button>+</Button>
                    </CardSection>
                    <ScrollView>
                    {this.renderEvent()}
                    </ScrollView>
                    <CardSection>
                        <Text>EVENTS GROUPS ALERTS SEARCH SETTINGS</Text>
                    </CardSection>
                </Card>

        )
    }
}

const styles = {
    imageStyle: {
        height: 150,
        flex: 1,
        width: null

    },
    textBoxStyle: {
        flex: 1,
        flexDirection: 'column',

    }
}

export default GroupPage;
