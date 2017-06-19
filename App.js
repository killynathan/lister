import { StackNavigator } from 'react-navigation';
import ListsScreen from './screens/listsScreen';
import ListScreen from './screens/listScreen';


export default App = StackNavigator({
  Home: {screen: ListsScreen},
  ListScreen: {screen: ListScreen}
}, {
  headerMode: 'none'
});