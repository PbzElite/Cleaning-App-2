import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../screens/Search';
import Transactions from '../screens/Transactions'

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size}) => {
              let iconName;

              if (route.name === "Search"){
                iconName = focused
                  ? 'ios-list'
                  : 'ios-list-outline';
              } else if (route.name === 'Transactions') {
                iconName = focused
                  ? 'ios-cash'
                  : 'ios-cash-outline';
              }

              return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Transactions" component={Transactions}/>
          <Tab.Screen name="Search" component={Search}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}