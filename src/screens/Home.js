import React, { Fragment, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { List } from '../components/List';
import { addTodo, removeTodo } from '../actions/todo';
import { todosSelector } from '../selectors/todo';

export const Home = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  const handleSubmit = () => {
    if (description === '') {
      Alert.alert('Error occurred', 'Please enter a description');
    } else {
      dispatch(addTodo(description));
    }
  };

  const handleRemove = id => {
    dispatch(removeTodo(id));
  };

  return (
    <Fragment>
      <Text h1>Todo App</Text>
      <Input
        placeholder='Enter todo here'
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <Button title='Add todo' onPress={handleSubmit} />
      <List data={todos} onRemove={handleRemove} />
    </Fragment>
  );
};
