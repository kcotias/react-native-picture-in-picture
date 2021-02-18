import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PipView from 'react-native-picture-in-picture';
import YouTube from 'react-native-youtube';

const App = () => {
  const [isPipVisible, setPipVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setPipVisible(!isPipVisible)}
        style={styles.button}>
        <Text style={styles.text}>Play music!</Text>
      </TouchableOpacity>
      {isPipVisible && (
        <PipView visible={isPipVisible} width={300} height={200}>
          <YouTube
            videoId="NKeU1twQYX4"
            play
            fullscreen={false}
            loop
            style={styles.youtube}
          />
        </PipView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  button: {
    backgroundColor: '#7b1fa2',
    paddingVertical: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: '#7b1fa2',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,

    elevation: 7,
  },
  youtube: {
    width: 300,
    height: 200,
    borderRadius: 30,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});

export default App;
