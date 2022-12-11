import 'react-native-gesture-handler';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Search from './Search';
import Profile from './Profile';
import Setting from './Setting';

import { loadAsync } from 'expo-font';


// const Drawer = createDrawerNavigator()

const Tab = createBottomTabNavigator();

export default function MainTab() {
//   loadAsync("Abel_400Regular").then((font)=> console.log(font))

  return (
    
    
      
  <Tab.Navigator initialRouteName="Home" screenOptions={
        {headerShown: false}
      }>
        
        <Tab.Screen name="Search" component={Search}  options={{
          title:"Search",
          tabBarIcon: ({color})=>(<FontAwesome5 name="search" size={24} color={color} />)
        }}  />
        <Tab.Screen name="Profile" component={Profile} options={{
          title:"Profile",
          tabBarIcon:({color}) => (<AntDesign name="profile" size={24} color={color} />)
        }} />
        <Tab.Screen name={`Setting & Privacy`} component={Setting} options={{
            title:"Profile",
            tabBarIcon:({color}) => (<Ionicons name="settings" size={24} color={color} />)
        }} />
        
        
      </Tab.Navigator>
    
    
  );

}
