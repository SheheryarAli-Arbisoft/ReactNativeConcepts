import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  SectionList,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});

const data = [
  {
    title: 'Section 1',
    data: ['Item 1', 'Item 2', 'Item 3'],
  },
  {
    title: 'Section 2',
    data: ['Item 4', 'Item 5', 'Item 6'],
  },
  {
    title: 'Section 3',
    data: ['Item 7', 'Item 8', 'Item 9'],
  },
];

const App = () => {
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  );

  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(_, index) => `${index}`}
      />
    </SafeAreaView>
  );
};

export default App;
