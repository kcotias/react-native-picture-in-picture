import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PipView from './src/PipView';

const App = () => {
  return (
    <View style={styles.container}>
      <PipView
        width={200}
        height={200}
        containerStyles={{backgroundColor: 'red'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'yellow'},
});

export default App;
