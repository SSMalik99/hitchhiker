import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';


const styles = StyleSheet.create({
    wrapper : {
        flex:1,
        justifyContent:'center',
        alignContent:'center'
        
    },
})
export default function Login() {
    return (
        <View style={styles.wrapper}>
            <Text>I am Login</Text>
        
        </View>
    );
}