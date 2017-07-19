import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Image
} from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Header from './common/Header';
import Input from './common/Input';

export default class SignUp extends Component {
    render() {
      const { thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
        } = styles;
        return (
            <Card>
                <Header headerText='Sign Up' />
                <CardSection>
                <Input placeholder='Phone Number'/>
                </CardSection>
                <CardSection>
                    <Text>Area</Text>
                    </CardSection>
                     <CardSection>
                   <Text>Upload Photo</Text>
                    </CardSection>
                    <CardSection>
                        <Image style={imageStyle}source={{uri: 'https://i.ytimg.com/vi/RXKJolS9Atg/hqdefault.jpg'}}/>
                    </CardSection>
                </Card>
        );
    };
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