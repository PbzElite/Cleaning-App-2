import { requestBackgroundPermissionsAsync } from 'expo-location';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Search extends React.Component {
  render(){
    return(
      <View style={styles.searchContainer}>
        <Text style={styles.ordering1}>In order to order, simply put the service id into the search bar on the Transactions page and click submit. Please note that you may have to click submit multiple times to submit because we are still in 0.1.0 beta</Text>
        <Text style={styles.ordering2}>The Service Id can be found after the price</Text>
        <Text style={styles.servicename}>Vacuuming | $3 | SERV001</Text>
        <Text style={styles.servicedesc}>Vacuuming of three rooms</Text>
        <Text style={styles.servicename}>Mopping | $3 | SERV002 </Text>
        <Text style={styles.servicedesc}>Mopping of one room</Text>
        <Text style={styles.servicename}>Deluxe Mopping | $4 | SERV003</Text>
        <Text style={styles.servicedesc}>Vacuuming and mopping of two rooms</Text>
        <Text style={styles.servicename}>Wiping Down Surfaces | $2 | SERV004</Text>
        <Text style={styles.servicedesc}>Wiping down all surfaces in one room</Text>
        <Text style={styles.servicename}>Deluxe Room Cleaning | $4 | SERV005</Text>
        <Text style={styles.servicedesc}>Cleaning one room entirely</Text>
        <Text style={styles.servicename}>1 Hour Clean-For-All</Text>
        <Text style={styles.servicedesc}>One hour of any cleaning you want </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0d6fd1'
  },
  ordering1: {
    color: 'lightgray',
    fontSize: 20,
    marginTop: 25,
  },
  ordering2: {
    color: 'lightgray',
    fontSize: 19,
    marginTop: 10,
    marginBottom: 15,
  },
  servicename: {
    color: 'lightgray',
    fontSize: 30,
    marginBottom: 3,
  },
  servicedesc: {
    color: 'lightgray',
    fontSize: 25,
    marginBottom: 15,
  },
});
