import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Search extends React.Component {
  render(){
    return(
      <View style={styles.searchContainer}>
        <Text style={styles.text}>Search Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d6fd1'
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
});