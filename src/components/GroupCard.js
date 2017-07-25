import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import {CardSection, Card} from './common';


const GroupCard = ({ group }) => {

    return (
        <View>
        <Card>
            <CardSection>
                <View>
                    <Text>{group.group_name}</Text>
                    <Text>{group.admin_fname + ' ' + group.admin_fname}</Text>
                </View>
            </CardSection>
        </Card>
        </View>
    )
};


export default GroupCard;