import React from 'react';
import { Text, View, Image, Linking} from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';


const EventCard = ({ event }) => {
    const { date, eventName , image } = event;
    const { 
        headerContentStyle,
        headerTextStyle,
        imageStyle
        } = styles;
    return (
        <Card>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{eventName}</Text>
                    <Text>{date}</Text>
                </View>
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null

    }
}

export default EventCard;