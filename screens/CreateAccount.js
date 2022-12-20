import React, { useRef } from "react";
import { KeyboardAvoidingView, TextInput } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export default function CreateAccount() {
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // 함수를 일일이 ref마다 만들 이유가 없다.
  // const goRefLastName = () => {
  //   lastNameRef?.current?.focus();
  // };
  const onNext = (nextOn) => {
    nextOn?.current?.focus();
  };

  const onDone = () => {
    alert("Done!");
  };

  return (
    <AuthLayout>
      <KeyboardAvoidingView
        style={{ width: "100%" }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
      >
        <TextInput
          autoFocus
          style={{ backgroundColor: "white", width: "100%" }}
          placeholder="First Name"
          returnKeyType="next"
          placeholderTextColor="grey"
          onSubmitEditing={() => onNext(lastNameRef)}
        />
        <TextInput
          ref={lastNameRef}
          style={{ backgroundColor: "white", width: "100%" }}
          placeholder="Last Name"
          returnKeyType="next"
          placeholderTextColor="grey"
          onSubmitEditing={() => onNext(userNameRef)}
        />
        <TextInput
          ref={userNameRef}
          style={{ backgroundColor: "white", width: "100%" }}
          placeholder="UserName"
          returnKeyType="next"
          placeholderTextColor="grey"
          onSubmitEditing={() => onNext(emailRef)}
        />
        <TextInput
          ref={emailRef}
          style={{ backgroundColor: "white", width: "100%" }}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          placeholderTextColor="grey"
          onSubmitEditing={() => onNext(passwordRef)}
        />
        <TextInput
          ref={passwordRef}
          style={{ backgroundColor: "white", width: "100%" }}
          placeholder="Password"
          secureTextEntry
          returnKeyType="done"
          placeholderTextColor="grey"
          onSubmitEditing={onDone}
        />
        <AuthButton
          text="Create Account"
          disabled={true}
          onPress={() => null}
        />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
