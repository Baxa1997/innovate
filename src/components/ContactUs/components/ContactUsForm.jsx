"use client";
import * as React from "react";
import styles from "../styles.module.scss";
import { ChakraProvider, Checkbox } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FormInput from "@/components/Input/FormInput";
import FormRow from "@/components/Input/FormRow";
import FormTextarea from "@/components/Input/FormTextarea";
import CustomButton from "@/components/CustomButton";

export default function ContactUsForm() {
  const { control, handleSubmit } = useForm();

  return (
    <ChakraProvider>
      <form className={styles.form}>
        <FormRow
          label="Name"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormInput control={control} name="email" />
        </FormRow>
        <FormRow
          label="Company Name"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormInput control={control} name="email" />
        </FormRow>
        <FormRow
          label="Email"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormInput control={control} name="email" />
        </FormRow>
        <FormRow
          label="Phone Number"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormInput control={control} name="email" />
        </FormRow>
        <FormRow
          label="Amount of Trucks"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormInput control={control} name="email" />
        </FormRow>
        <FormRow
          label="Message"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormTextarea control={control} name="email" />
        </FormRow>
        <FormRow
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
          boxClassName={styles.checkbox}
        >
          <Checkbox />
          <p>You agree to our friendly privacy policy.</p>
        </FormRow>
        <CustomButton padding="12px 18px">Submit</CustomButton>
      </form>
    </ChakraProvider>
  );
}
