import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';

import { AntDesign } from '@expo/vector-icons';


export default function Home() {
   useFonts({
        Abel_400Regular,
      });

        return (
            <View style={styles.wrapper}>
            <View style={styles.logo_container}>
            <Image style={styles.logo}  
                        source={require('../../assets/logo1.png')}
                    />
            </View>
            <Pressable 
                onPress={()=>{
                    console.log("Pressed")
                }}
                style={styles.home_btn}
            >
                <Text style={styles.home_btn_text}>
                    Get Started
                    
                </Text>
                <AntDesign name="arrowright" style={
                    {
                        fontFamily:'Abel_400Regular',
                        paddingTop:2,
                        marginLeft:3
                    }
                } size={16} color="white" />
            </Pressable>
            
            </View>
        );
}
const styles = StyleSheet.create({
    wrapper : {
        flex:1,
        justifyContent:'center',
        alignContent:'center'
        
    },
    logo_container:{
        justifyContent:'space-around',
        alignContent:'center'
    },
    logo:{
        width:200,
        height:200,
        alignContent:'center'
    },
    home_btn:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginTop:10,
        backgroundColor: '#128892',
        flexDirection: 'row'
      },
      home_btn_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#ffffff',
        fontFamily:'Abel_400Regular',
      },
})