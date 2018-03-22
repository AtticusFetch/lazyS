import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import RestaurantsScreen from '././Screens/Restaurants';
import RestaurantDetailsScreen from '././Screens/RestaurantDetails';

export default StackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Restaurants'
    }),
  },
  RestaurantDetails: {
    screen: RestaurantDetailsScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.restaurant.title
    }),
  },
}, { initialRouteName: 'Restaurants' });
