import React from 'react';
import { LogBox } from 'react-native'
import Routes from './src/routes.js'

LogBox.ignoreLogs([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <Routes />
  )
}