import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function Login() {
  const { register, handleSubmit, setValue } = useForm();
  const passwordRef = useRef();

  const onNext = (nextOn) => {
    nextOn?.current?.focus();
  };

  const onValid = (data) => {
    console.log(data);
  };

  // 딱 한 번 실행하거나, register가 바뀌면 실행할것
  useEffect(() => {
    register("username");
    register("password");
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        placeholder="UserName"
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor={"rgba(225, 225, 225, 0.8)"}
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("username", text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOn={true}
        placeholderTextColor={"rgba(225, 225, 225, 0.8)"}
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton
        text="Login"
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
