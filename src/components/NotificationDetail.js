import React from 'react';
import { Text, View, Image, Linking} from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';


const NotificationDetail = ({ message }) => {
    const { GroupName, skill, Message , image } = message;
    const { 
        headerContentStyle,
        headerTextStyle,
        imageStyle
        } = styles;
    return (
        <Card>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{GroupName}</Text>
                    <Text>{Message}</Text>
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

export default NotificationDetail;