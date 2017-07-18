import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Header from './common/Header';
import Input from './common/Input'
const CreateGroups = () => {
    const { imageStyle } = styles;
    return (
        <Card>
            <Header headerText={'Create Group'} />
            <CardSection>
                <Image style={imageStyle} source={{ uri: 'https://s1.postimg.org/nkt54pa4f/Wacky-_Races-2016-title.png' }} />
            </CardSection>
            <CardSection>
                <Input placeholder='Contact Details' />
            </CardSection>
            <CardSection>
                <Input placeholder='Admin' />
            </CardSection>
            <CardSection>
                <Input placeholder='Description' />
            </CardSection>
            <CardSection>
                <Text>EVENTS GROUPS ALERTS SEARCH SETTINGS</Text>
            </CardSection>


        </Card>
    )
}
const styles = {
    imageStyle: {
        height: 150,
        flex: 1,
        width: null

    }
}

export default CreateGroups;