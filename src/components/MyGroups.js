import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, Linking,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {FetchUserGroups} from '../actions'; 
import * as actions from '../actions';
import { Header }from './common';
import GroupCard from './GroupCard';

const userId = 1;

class MyGroups extends Component {
    componentDidMount() {
        this.props.fetchUserGroups();
    }
    render() {
        return (
            <ScrollView>
                <Header headerText={'My Groups'} />
                <View>{this.props.groups.map( group => {
                    return <GroupCard 
                        key={group.group_id} 
                        group={group} />;})}
                </View>	
            </ScrollView>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserGroups: () => {
            dispatch(actions.fetchUserGroups(userId));
        }
    };
};
const mapStateToProps = (state) => {
    // console.log(state.groups.groups)
    return {
        groups: state.groups.groups.data || []
    };
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0000'
    },
    groups: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'	
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyGroups);
