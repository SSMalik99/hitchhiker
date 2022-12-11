import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import Search from './src/Screens/Search';
import { loadAsync } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/Screens/MainTab';


// const Drawer = createDrawerNavigator()

const MainStack = createNativeStackNavigator()

export default function App() {

  // loadAsync("Abel_400Regular").then((font)=> console.log(font))

  return (
    
    <NavigationContainer>
    <MainStack.Navigator initialRouteName='Home'>

        <MainStack.Screen name="Home" component={Home} options={
          {
            
          }
        } />
        
        <MainStack.Screen name="Login" component={Login} options={{}} />
        <MainStack.Screen name='signup' component={Signup} options={{}} />
        <MainStack.Screen name='MainTab' component={MainTab} />
      </MainStack.Navigator>
      </NavigationContainer>
    
  );

}
