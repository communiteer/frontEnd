import React from 'react';
import { Text, View, Image, Linking} from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';


const GroupCard = ({ group }) => {
    const { groupBanner, groupName , admin } = group;
    const { 
        headerContentStyle,
        headerTextStyle,
        imageStyle
        } = styles;
    return (
        <Card>
            <CardSection>
                    <Image style={imageStyle}
                    source={{uri: groupBanner}} />
                    </CardSection>
                    <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{groupName}</Text>
                    <Text>Admin: {admin}</Text>
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
        height: 150,
        flex: 1,
        width: null

    }
}

export default GroupCard;