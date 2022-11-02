import { Button, StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';

// import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import AppHeader from "../components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export default function Profile(){
    const navigation = useNavigation();
    useFonts({
        Abel_400Regular,
      });

        return (
            <SafeAreaView style={styles.main_container}>
                <ScrollView>
                <AppHeader includeLogin={false} />
            <View style={styles.wrapper}>
                
                <Text>I am Profile</Text>
            
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
    wrapper : {
        flex:1,
        justifyContent:'center',
        alignContent:'center'
        
    },
    
})

