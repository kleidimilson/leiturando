import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Router from './src/Drawer'

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#48B86D" />
      <Router/>
    </>
  );
}


