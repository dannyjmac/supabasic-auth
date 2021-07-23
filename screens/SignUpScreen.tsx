import { StackScreenProps } from "@react-navigation/stack";
import Input from "../components/common/Input";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useAuthPresenter from "./authPresenter";
import Button from "../components/common/Button";

const SignUpScreen = observer(() => {
  const { setEmail, email, password, setPassword, performSignUp, loginError } =
    useAuthPresenter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign UP</Text>
      <Input
        label="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry
      />
      <Button
        onPress={async () => {
          await performSignUp();
        }}
      >
        <Text>Create Account</Text>
      </Button>
      {loginError && (
        <Text style={styles.errorText}>
          "There was an error creating your account, please try again"
        </Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  errorText: {
    color: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

export default SignUpScreen;
