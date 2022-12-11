import { Button, StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';

// import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import React from 'react';
import Icon from "@expo/vector-icons/FontAwesome";


export default function Profile(){
    const navigation = useNavigation();
    useFonts({
        Abel_400Regular,
      });

        return (
            <SafeAreaView style={styles.main_container}>
                <ScrollView>
                {/* <AppHeader includeLogin={false} /> */}

                <View  style={styles.main_wrapper}>
                <View style={styles.ride_external_row_icon}>
                        <Icon name="user-circle-o" style={[styles.icon2]}></Icon>
                    </View>
                    <View style={styles.ride_external_row1}>
                        <Text  style={styles.ride_text2}>User Name </Text>
                    </View>
                    <View style={styles.ride_external_row1}>
                        <Text  style={styles.ride_text2}>About:</Text>
                    </View>
                    <Text  style={styles.ride_text3}>Write somethig about yourself.....</Text>
                </View>


                <View style={styles.wrapper}>
                    <View style={styles.ride_external_row}>
                        <Text style={styles.ride_text}>Contact Information:</Text>
                        <Icon name="pencil" style={[styles.icon]}></Icon>
                    </View>
                    
                    <View style={styles.ride_external_row}>
                        <Icon name="phone" style={[styles.userIcon]}></Icon>
                        <View>
                            <Text style={styles.ride_text}>+1 000 000 0000</Text>
                        </View>
                    </View>
                    <View style={styles.ride_external_row}>
                        <Icon name="whatsapp" style={[styles.userIcon]}></Icon>
                        <View>
                            <Text style={styles.ride_text}>+1 000 000 0000</Text>
                        </View>
                    </View>
                    <View style={styles.ride_external_row}>
                        <Icon name="envelope" style={[styles.userIcon]}></Icon>
                        <View>
                            <Text style={styles.ride_text}>username@gmail.com</Text>
                        </View>
                    </View>
                    <View style={styles.ride_external_row}>
                        <Icon name="car" style={[styles.userIcon]}></Icon>
                        <View>
                            <Text style={styles.ride_text}>Your Ride</Text>
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
        marginTop: 70,
        paddingStart:15,
        paddingTop:30,
      },
      main_wrapper: {
        flex: 1,
        alignItems:"flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "100%",
        paddingStart:30,
        paddingTop:20,
      },
      
      icon: {
        paddingStart:150,
        fontSize:22,
      },
      icon2: {
        fontSize:70,
      },

      userIcon: {
        fontSize: 35,
        marginEnd:30,
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
      ride_text2:{
        fontSize:25,
        color:"#ffffff",
        fontFamily:"Abel_400Regular",
      },
      ride_text3:{
        fontSize:17,
        color:"#ffffff",
        fontFamily:"Abel_400Regular",
      },
      ride_external_row_icon:{
        flexDirection:"row",

      },
      ride_external_row:{
          flexDirection:"row",
          justifyContent:"space-around",
          marginTop: 30,
          marginBottom:20,
          marginStart: 20,
      },
      ride_external_row1:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop: 20,
      },
      ride_internal_row:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginStart: 60,
    },
    ride_top_row:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop: 30,
        marginBottom:20,
        marginStart: 0,
    },
    
})

