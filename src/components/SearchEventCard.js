import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import { Card } from './common';
import { CardSection } from './common';


const SearchEventCard = ({event}) => {
    return (
        <Card>
            <CardSection>
                <View>
                    <Text>{event.event_name}</Text>
                    <Text>{event.event_date}</Text>
                    <Text>{event.event_time}</Text>
                </View>
            </CardSection>
        </Card>
    )
};



export default SearchEventCard;