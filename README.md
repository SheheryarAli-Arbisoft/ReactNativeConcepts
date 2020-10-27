# React Native Concepts

This repository has been created to maintain a record of all the different Core Component API's in React Native. Each Component API has its own branch and contains a sample project which demonstrates its usage.

## Current branch: ScrollView API

This component is used when we want to add scroll functionality to a screen. If the number of items is reasonable then ScrollView may be used but when there is a large number of items do not use ScrollView because it renders all the items at once and this may cause performance issues on some devices. For a large list of items use FlatList or SectionList.
