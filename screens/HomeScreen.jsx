import React from 'react';
import { View } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
  return (
    <MainLayout>
      <View>
        <ToDoForm />
        <ToDoList />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
}

export default HomeScreen;