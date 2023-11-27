import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const appName = "My To Do List App";
  const yourName = "Quynh Ngo";
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
      <View>
        <Text>{appName}</Text>
        <Text>{yourName}</Text>
        <Text>{currentDate}</Text>
      </View>

      
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </MainLayout>
  );
}

export default AboutScreen;