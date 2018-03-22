
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import shortid from 'shortid';

import { FOOD_ITEMS } from './../../config/api';

import FoodItem from './../../components/FoodItem';

class RestaurantDetails extends React.Component {
  state = {
    foodItems: [],
  };
  componentDidMount() {
    const { restaurant } = this.props.navigation.state.params;
    axios.get(`${FOOD_ITEMS}?id=${restaurant._id}`)
      .then(response => this.setState({ foodItems: _.chunk(response.data, 2) }))
      .catch(e => console.error(e));
  }

  _renderFoodItem = item => <FoodItem key={item._id} item={item} />

  _renderRow = chunk => (
    <View key={shortid.generate()} style={styles.row}>
      {chunk.map(this._renderFoodItem)}
    </View>
  );

  render() {
    const { foodItems } = this.state;
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        {foodItems.map(this._renderRow)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  container: {
    paddingVertical: 50,
    backgroundColor: 'rgb(30, 30, 30)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RestaurantDetails;