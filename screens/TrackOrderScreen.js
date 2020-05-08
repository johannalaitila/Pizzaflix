import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function TrackOrderScreen() {
  return (
    <View>
      <Text>Pizza Order #123</Text>
      <Text>Thank you for ordering out pizza!</Text>
      <Text>Your order will be delivered in 25 minutes.</Text>
    </View>
  );
}
