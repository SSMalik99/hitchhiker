import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';

// import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Search(){
    const navigation = useNavigation();
    useFonts({
            Abel_400Regular,
        });

        return (
            <View style={styles.wrapper}>
                <View>
                    <Button onPress={() => {
                        navigation.navigate('Login')
                    }} title="Login" />
                    <Text>|</Text>
                    <Button onPress={() => {
                        navigation.navigate('Signup')
                    }} title="Signup" />
                </View>
                <Text>I am search</Text>
            
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

