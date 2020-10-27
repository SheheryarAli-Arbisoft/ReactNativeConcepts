import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
});

const data = [
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
  {
    title: 'Title',
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
      />
    </SafeAreaView>
  );
};

export default App;
