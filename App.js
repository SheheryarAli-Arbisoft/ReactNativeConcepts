import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    borderWidth: 8,
    borderColor: 'white',
  },
  box2: {
    width: '100%',
    flexGrow: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 8,
    borderColor: 'white',
  },
  box2Inner1: {
    height: 100,
    backgroundColor: '#00bb00',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2Inner2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#006600',
  },
  box3: {
    width: '100%',
    flexGrow: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 8,
    borderColor: 'white',
  },
  box3Inner1: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#0000ff',
  },
  box3Inner2: {
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
    flexDirection: 'row',
  },
  box3Inner3: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#000066',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Flex Grow: 1</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.box2Inner1}>
          <Text style={styles.text}>Height: 100</Text>
        </View>
        <View style={styles.box2Inner2}>
          <Text style={styles.text}>Flex Grow: 1</Text>
        </View>
      </View>
      <View style={styles.box3}>
        <View style={styles.box3Inner1}>
          <Text style={styles.text}>Height: 80</Text>
        </View>
        <View style={styles.box3Inner2}>
          <View
            style={{
              flexGrow: 1,
              backgroundColor: '#0000cc',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.text}>FG: 1</Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              backgroundColor: '#0000aa',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.text}>FG: 1</Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              backgroundColor: '#000077',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.text}>FG: 1</Text>
          </View>
        </View>
        <View style={styles.box3Inner3}>
          <Text style={styles.text}>Height: 80</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
