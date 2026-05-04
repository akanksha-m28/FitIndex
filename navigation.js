import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculatorScreen from '../screens/CalculatorScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        tabBarActiveTintColor: '#10b981',
        headerShown: false 
      }}
    >
      <Tab.Screen 
        name="Calculator" 
        component={CalculatorScreen} 
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="calculator-variant" size={24} color={color} />,
        }}
      />
      <Tab.Screen 
        name="History" 
        component={HistoryScreen} 
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="history" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}