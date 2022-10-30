import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';

// import { AntDesign } from '@expo/vector-icons';


const Setting = () => {
   useFonts({
        Abel_400Regular,
      });

        return (
            <View style={styles.wrapper}>
                <Text>I am Setting</Text>
            
            </View>
        );
}


const styles = StyleSheet.create({
    wrapper : {
        flex:1,
        justifyContent:'center',
        alignContent:'center'
        
    },
    
})

export default Setting