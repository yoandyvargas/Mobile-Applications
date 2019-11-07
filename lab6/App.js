import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.game}>Counter-Strike</Text>
        <Text style={styles.description}>
          This was one of the first PC video games I ever played.
          I ended up getting very good and competing at high levels.
          I made many friends and it was an adrenaline pumping fun game.
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#E4D6A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  game: {
    padding: 10,
    fontSize: 40,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#9B2915",

  },
  description: {
    padding: 40,
    color: "#473144",
    fontSize: 20,
  },
});

export default App;
