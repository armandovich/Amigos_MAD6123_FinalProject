import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Projects from "../screens/Projects.js";
import Profile from '../screens/Profile.js'

const projectsRout = "Projects";
const profileRout = "Profile";

const Tap = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tap.Navigator
        screenOptions={ ({route}) => ({ 
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000' },
        tabBarActiveTintColor: '#84B026',
        tabBarInactiveTintColor: '#fff',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? "#84B026" : "#fff";
          let rn = route.name;
  
          if (rn == projectsRout) {
            iconName = "md-home";
          } else if (rn == profileRout) {
            iconName = "md-person-circle-outline";
          }
  
          return <Ionicons name={iconName} size={24} color={iconColor}/>
        },
        })}>
        <Tap.Screen name={projectsRout} component={Projects}/>
        <Tap.Screen name={profileRout} component={Profile}/>
      </Tap.Navigator>
    );
}