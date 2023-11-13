/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
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

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      <ToDoForm />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

export default App;
