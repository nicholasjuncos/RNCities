import { AppRegistry } from 'react-native';
import App from './App';

console.ignoredYellowBox = ['Remote debugger is in a background tab']
console.ignoredYellowBox = ['VirtualizedList: missing keys for items, make sure to specify']

AppRegistry.registerComponent('RNCities', () => App);
