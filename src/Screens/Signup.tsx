import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#128892",
    alignItems: "center",
    justifyContent: "center",
  },

  logo_container: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 40,
  },

  logo: {
    height: 150,
    width: 150,
  },

  inputView: {
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
  },

  iconContainer: {
    height: 32,
    width: 32,
    marginTop: 12,
  },

  icon: {
    fontSize: 32,
  },

  userIcon: {
    fontSize: 28,
  },
  TextInput: {
    width: "100%",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  btn_container: {
    flexDirection: "row",
    marginTop: 35,
  },

  link_btn: {
    height: 30,
    marginBottom: 30,
    marginLeft: 8,
    color: "white",
  },

  signup_button: {
    marginRight: 8,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 8,
  },

  text: {
    color: "white",
  },

  loginBtn: {
    width: "60%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    backgroundColor: "white",
  },
});

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setPasswordHideFlag] = useState(true);
  const [hideConfirmPassword, setConfirmPasswordHideFlag] = useState(true);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../../assets/logo1.png")} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <View style={styles.iconContainer}>
          <Icon
            name="user-circle-o"
            style={[styles.icon, styles.userIcon]}
          ></Icon>
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
        />
      </View>

      <View style={styles.inputView}>
        <View style={styles.iconContainer}>
          <Icon name="envelope" style={[styles.icon, styles.userIcon]}></Icon>
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <View style={styles.iconContainer}>
          <Icon name="phone" style={[styles.icon, styles.userIcon]}></Icon>
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone."
          placeholderTextColor="#003f5c"
        />
      </View>

      <View style={styles.inputView}>
        <View style={styles.iconContainer}>
          <Icon name="lock" style={[styles.icon]}></Icon>
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={hidePassword}
          onChangeText={(password) => setPassword(password)}
        />
        <Icon
          name={hidePassword ? "eye" : "eye-slash"}
          onPress={() => setPasswordHideFlag(!hidePassword)}
        ></Icon>
      </View>

      <View style={styles.inputView}>
        <View style={styles.iconContainer}>
          <Icon name="lock" style={[styles.icon]}></Icon>
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={hideConfirmPassword}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
        />
        <Icon
          name={hideConfirmPassword ? "eye" : "eye-slash"}
          onPress={() => setConfirmPasswordHideFlag(!hideConfirmPassword)}
        ></Icon>
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text>Signup</Text>
      </TouchableOpacity>

      <View style={styles.btn_container}>
        <Text style={styles.text}>Already have a account ?</Text>
        <TouchableOpacity>
          <Text
            style={[styles.link_btn, styles.signup_button]}
            onPress={() => {
              navigation.navigate("Login" as never);
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
