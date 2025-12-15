import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoogleMaps } from 'expo-maps';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
      <StatusBar style="auto" />
    </View>
  );
}

function MapScreen({ navigation }) {
  const DEFAULT_CENTER = { latitude: 39.8283, longitude: -98.5795 }
  return (
    <View style={{flex:1}}>
        <GoogleMaps.View cameraPosition={{ coordinates: DEFAULT_CENTER, zoom: 3 }} style={{  height:500 }} /> 
    </View>
  );
} 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
  },
});
