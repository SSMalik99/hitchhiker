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

const navigation = useNavigation();

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
  },

  icon: {
    height: 40,
    width: 40,
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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../../assets/logo1.png")} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <Image
          style={styles.icon}
          source={require("../../assets/male-user-icon.svg")}
        ></Image>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <Image
          style={styles.icon}
          source={require("../../assets/lock-icon.svg")}
        ></Image>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn_container}>
        <Text
          style={[styles.link_btn, styles.signup_button]}
          onPress={() => {
            navigation.navigate("Signup" as never, null as never);
          }}
        >
          Signup
        </Text>
        <Text>|</Text>
        <Text style={[styles.link_btn, styles.forgot_button]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}
