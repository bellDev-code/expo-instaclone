import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function Login({ navigation }) {
  return (
    <AuthLayout>
      <TextInput
        placeholder="UserName"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        placeholderTextColor={"rgba(225, 225, 225, 0.8)"}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOn={true}
        placeholderTextColor={"rgba(225, 225, 225, 0.8)"}
      />
    </AuthLayout>
  );
}
