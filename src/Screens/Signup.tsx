import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';


const styles = StyleSheet.create({
    wrapper : {
        flex:1,
        justifyContent:'center',
        alignContent:'center'
        
    },
})
export default function Signup() {
    return (
        <View style={styles.wrapper}>
            <Text>I am Signup</Text>
        
        </View>
    );
}