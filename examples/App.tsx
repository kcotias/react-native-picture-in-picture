import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PipView from 'react-native-picture-in-picture';

const App = () => {
  return (
    <View style={styles.container}>
      <PipView width={100} height={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
