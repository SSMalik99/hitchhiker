import { Button, StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';

// import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import React from 'react';
import Icon from "@expo/vector-icons/FontAwesome";
import AppFooter from '../components/Footer';


const Setting = () => {
   useFonts({
        Abel_400Regular,
      });

        return (
            <SafeAreaView style={styles.main_container}>
            <ScrollView>
            <AppHeader includeLogin={false} />
            <View style={styles.wrapper}>
              
              <View style={styles.ride_external_row}>
                    <Icon name="user-circle-o" style={[styles.icon, styles.userIcon, styles.iconContainer]}></Icon>
                    <View>
                      <Text style={styles.ride_text}>User Info</Text>
                      <Text style={styles.ride_text1}>name, email etc.</Text>
                    </View>
              </View>
              
              <View style={styles.ride_external_row}>
                    <Icon name="gear" style={[styles.icon, styles.userIcon, styles.iconContainer]}></Icon>
                    <View>
                      <Text style={styles.ride_text}>Privacy settings</Text>
                      <Text style={styles.ride_text1}>profile personal details settings</Text>
                    </View>       
              </View>

              <View style={styles.ride_external_row}>
                    <Icon name="lock" style={[styles.icon, styles.userIcon, styles.iconContainer]}></Icon>
                    <View>
                      <Text style={styles.ride_text}>Privacy policy</Text>
                      <Text style={styles.ride_text1}>policy info in detail</Text>
                    </View>
              </View>

              <View style={styles.ride_external_row}>
                    <Icon name="info" style={[styles.icon, styles.userIcon, styles.iconContainer]}></Icon>
                    <View>
                      <Text style={styles.ride_text}>About us</Text>
                      <Text style={styles.ride_text1}>company and ride app details</Text>
                    </View>
              </View>

              <View style={styles.ride_external_row}>
                    <Icon name="question" style={[styles.icon, styles.userIcon, styles.iconContainer]}></Icon>
                    <View>
                      <Text style={styles.ride_text}>Help</Text>
                      <Text style={styles.ride_text1}>user help , query etc.</Text>
                    </View>
              </View>
            </View>
            </ScrollView>
            </SafeAreaView>
        );
}


const styles = StyleSheet.create({
    main_container: {
        backgroundColor: "#128892",
        height: Dimensions.get('window').height
      },
      wrapper: {
        flex: 1,
        alignItems:"flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "100%",
        height: Dimensions.get('window').height,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        marginTop: 50,
        paddingStart:30,
        paddingTop:30,
      },

      icon: {
        fontSize: 35,
      },
    
      userIcon: {
        fontSize: 35,
        marginEnd:10,
      },
      iconContainer: {
        backgroundColor: "#ffffff",
        height: 40,
        width: 50,
      },
      ride_text:{
        fontSize:20,
        color:"#000000",
        fontFamily:"Abel_400Regular",
      },
      ride_text1:{
        fontSize:15,
        color:"#000000",
        fontFamily:"Abel_400Regular",
      },
      ride_external_row:{
          flexDirection:"row",
          justifyContent:"space-around",
          marginTop: 40,
          marginBottom:20,
          marginStart: 20,
      },
      ride_internal_row:{
        flexDirection:"row",
        justifyContent:"space-around",

        marginStart: 60,
    },
})

export default Setting