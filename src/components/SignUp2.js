import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Image
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Header from './common/Header';
import Input from './common/Input';

export default class SignUp2 extends Component {
    render() {
        return (
            <Card>
                <Header headerText='Choose your skills' />
                <CardSection>
                    <ModalDropdown options={['option 1', 'option 2']} />
                </CardSection>
                 <CardSection>
                    <ModalDropdown options={['option 1', 'option 2']} />
                </CardSection>
                 <CardSection>
                    <ModalDropdown options={['option 1', 'option 2']} />
                </CardSection>
                 <CardSection>
                    <ModalDropdown options={['option 1', 'option 2']} />
                </CardSection>
                 <CardSection>
                    <ModalDropdown options={['option 1', 'option 2']} />
                </CardSection>
            </Card>

        )
    };
};