
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import shortid from 'shortid';

import { FOOD_ITEMS } from './../../config/api';

class RestaurantDetails extends React.Component {
  state = {
    expanded: false,
  };

  _toggleExpandedState = () => this.setState(state => ({ expanded: !state.expanded }));

  render() {
    const { expanded } = this.state;
    const { item } = this.props;
    return (
        <View key={item._id} style={styles.thumbContainer}>
          <TouchableOpacity
            onPress={this._toggleExpandedState}
          >
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: item.image }}
            />
          </TouchableOpacity>
          {expanded ? (
            <View style={styles.thumb}>
              <TouchableOpacity>
                <View style={styles.button}></View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.button}></View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.button}></View>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={this._toggleExpandedState}
            >
              <View style={styles.thumb}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    height: 100,
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'lightgrey',
  },
  thumbContainer: {
    flex: 1,
    maxWidth: 160,
    marginRight: 2,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgb(204, 204, 204)',
  },
  thumb: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 60,
    marginBottom: 20,
  },
  text: {
    color: 'rgb(204, 204, 204)',
  },
});

export default RestaurantDetails;