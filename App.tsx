import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';


import Home from './src/Screens/Home';
import Search from './src/Screens/Search';
import Profile from './src/Screens/Profile';
import Setting from './src/Screens/Setting';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';


const Drawer = createDrawerNavigator()

export default function App() {
  const [loaded, error] = useFonts({
    Abel_400Regular,
  });
  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={
        {headerShown: false}
      }>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Search" component={Search}  />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name='Setting & Privacy' component={Setting} />
        <Drawer.Screen name="Login" component={Login} options={{
                drawerItemStyle: {
                  display: "none",
                },
            }
        } />
        <Drawer.Screen name='Sign up' component={Signup} options={
          {
            drawerItemStyle: {
              display: "none",
            },
          }
        } />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );

}
