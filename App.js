import React from "react";
import {
  Dimentions,
  Image,
  StyleSheet,
  AppRegistry,
  View,
  Text,
  StatusBar
} from "react-native";
import picLogo from "./assets/cat.jpeg";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Text style={styles.username}>Fluffy</Text>
        <Image style={styles.pic} source={picLogo}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dbdbdb'
  },
  pic: {
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  username: {
    // backgroundColor: 'rgba(0, 0, 0, .1)',
    fontSize: 30,
    padding: 10
  }
})
