import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';


const ProfilePage = () => {

    const { thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
        } = styles;
    return (
        <Card>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: 'https://i.ytimg.com/vi/RXKJolS9Atg/hqdefault.jpg' }} />
            </CardSection>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>User Profile</Text>
                    <Text>Dick Dastardly</Text>
                </View>
            </CardSection>
            <CardSection>
                <View>
                    <Text>Volunteer Level: 200</Text>
                </View>
            </CardSection>
                <CardSection>
                    <View>
                        <Text>Create Group</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View>
                        <Text>EVENTS GROUPS ALERTS SEARCH SETTINGS</Text>
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
    thumbnailStyle: {
        height: 50,
        width: 50

    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10

    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null

    }
}

export default ProfilePage;