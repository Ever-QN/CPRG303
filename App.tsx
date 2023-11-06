/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';


function App() {
  return (
    <SafeAreaView>
      <ToDoForm />
      <ToDoList />
    </SafeAreaView>
  );
}

export default App;
