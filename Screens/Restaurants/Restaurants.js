import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios';

import { RESTAURANTS } from './../../config/api';

export default class Restaurants extends React.Component {
  state = {
    restaurants: [],
  };
  componentDidMount() {
    axios.get(RESTAURANTS)
      .then(response => this.setState({ restaurants: response.data }))
      .catch(error => console.error(error));
  }

  _openDetails = restaurant => {
    this.props.navigation.navigate('RestaurantDetails', { restaurant });
  };
  
  _renderRestaurant = restaurant => (
    <TouchableOpacity
      style={styles.touchable}
      key={restaurant._id}
      onPress={() => this._openDetails(restaurant)}
    >
      <View style={styles.thumbContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          borderRadius={5}
          source={{ uri: restaurant.image }}
        />
        <View style={styles.thumb}>
          <Text style={styles.text}>{restaurant.title}</Text>
          <Text style={styles.text}>{restaurant.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { restaurants } = this.state;
    return (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
        >
          {restaurants.map(this._renderRestaurant)}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  touchable: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  image: {
    width: 300,
    height: 300,
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  thumbContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    maxHeight: 350,
    borderColor: 'rgb(204, 204, 204)',
    marginBottom: 10,
  },
  container: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 50,
    backgroundColor: 'rgb(30, 30, 30)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumb: {
    flex: 1,
    padding: 15,
    maxHeight: 100,
    marginBottom: 20,
  },
  text: {
    color: 'rgb(204, 204, 204)',
  },
});
