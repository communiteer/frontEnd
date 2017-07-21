import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import { Card } from './common';
import { CardSection } from './common';


const EventCard = (event) => {
    console.log('*******:', event)

    return (
        <Card>
            <CardSection>
                <View>
                    <Text>{event.name}</Text>
                    <Text>{event.date}</Text>
                    <Text>{event.skills}</Text>
                </View>
            </CardSection>
        </Card>
    )
};



export default EventCard;