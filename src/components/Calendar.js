import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Agenda} from 'react-native-calendars';

import Card from './common/Card';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        '2017-07-16': {
          groupname:'Wackey Races'
        }
      }
    };
  }

  render() {
    console.log(this.state.items);
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2017-07-14'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        /*renderComponent={this.renderComponent.bind(this)}*/
      />
    );
  }

  loadItems(day) {
    // dispatch thunk for fetching events
    setTimeout(() => {
      const newItems = {};
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        newItems[strTime] = [this.state.items[strTime]] || []
      }
      this.setState({items: newItems});
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }
  // renderComponent() {
  //   console.log('click damn you click!')
  //   return (
  //     <Card />
  //   )
  // }

  renderItem (item) {
    console.log('******', item)
    return (
      <View style={[styles.item, {height: 50}]}>
        <TouchableOpacity >
          <Text>{item.groupname}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderEmptyDate() {

    console.log('RENDER EMPTY DATE', arguments);
    return (
      <View style={styles.emptyDate}></View>
    );
  }

  rowHasChanged(r1, r2) {
    console.log('ROW HAS CHANGED');
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
