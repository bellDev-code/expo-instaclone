import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/Auth/AuthLayout";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export default function CreateAccount() {
  return (
    <AuthLayout>
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="First Name"
        returnKeyType="next"
        placeholderTextColor="grey"
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="Last Name"
        returnKeyType="next"
        placeholderTextColor="grey"
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="UserName"
        returnKeyType="next"
        placeholderTextColor="grey"
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="next"
        placeholderTextColor="grey"
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="Password"
        secureTextEntry
        returnKeyType="join"
        placeholderTextColor="grey"
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
