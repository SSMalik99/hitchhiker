import { Entypo } from '@expo/vector-icons';
import { Pressable, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';


const AppHeader = (includeLogin:boolean) => {
    const navigation = useNavigation();
    return !includeLogin ?
        <View style={styles.head}>
            <Pressable 
                    onPress={()=>{
                        navigation.toggleDrawer()
                    }}
                    
                >
                    <Entypo name="menu" size={24} color="white" />
                </Pressable>
        </View>
    :
        <View style={styles.head}>
          
                <Pressable 
                        onPress={()=>{
                            navigation.toggleDrawer()
                        }}
                    >
                    <Entypo name="menu" size={24} color="white" />
                </Pressable>

                <View style={
                    {
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }
                }>
                    <Pressable 
                        onPress={()=>{
                            navigation.navigate('Login')
                        }} >
                        <Text style={styles.header_link}>Login</Text>
                    </Pressable>

                    <Text style={{
                        marginHorizontal:8
                    }}>|</Text>

                    <Pressable 
                        onPress={()=>{
                            navigation.navigate('Signup')
                        }} >
                        <Text style={styles.header_link}>Sign Up</Text>
                    </Pressable>
                </View>
          
        </View>
    ;
}
const styles = StyleSheet.create({
    head:{
        backgroundColor:"#128892",
        flexDirection:"row",
        justifyContent:'space-between',
        padding:10,
        alignContent:'center',
    },
    header_link :{
        color:'#ffffff',
        fontFamily:"Abel_400Regular"
    }
})
export default AppHeader