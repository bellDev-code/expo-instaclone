import React, { useRef } from "react";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

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
      <TextInput
        autoFocus
        placeholder="First Name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        placeholderTextColor={"rgba(225, 225, 225, 0.8)"}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(userNameRef)}
        placeholderTextColor={"rgba(225, 225, 225, 0.8)"}
      />
      <TextInput
        ref={userNameRef}
        placeholder="UserName"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        placeholderTextColor={"rgba(225, 225, 225, 0.8)"}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        placeholderTextColor={"rgba(225, 225, 225, 0.8)"}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={onDone}
        placeholderTextColor={"rgba(225, 225, 225, 0.8)"}
        lastOne={true}
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
