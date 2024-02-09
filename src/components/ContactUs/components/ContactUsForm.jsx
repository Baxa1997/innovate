"use client";
import * as React from "react";
import styles from "../styles.module.scss";
import { ChakraProvider, Checkbox } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FormInput from "@/components/Input/FormInput";
import FormRow from "@/components/Input/FormRow";
import FormTextarea from "@/components/Input/FormTextarea";
import CustomButton from "@/components/CustomButton";
import { sendContactForm } from "../../../lib/api";

export default function ContactUsForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    try {
      await sendContactForm(values);
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <ChakraProvider>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Name"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormInput control={control} name="name" />
        </FormRow>
        <FormRow
          label="Company Name"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormInput control={control} name="company_name" />
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
          <FormInput control={control} name="phone" />
        </FormRow>
        <FormRow
          label="Amount of Trucks"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormInput control={control} name="amount" />
        </FormRow>
        <FormRow
          label="Message"
          color="#344054"
          labelStyle={{
            fontSize: "14px",
            marginBottom: "6px",
          }}
        >
          <FormTextarea control={control} name="message" />
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
        <CustomButton onClick={handleSubmit(onSubmit)} padding="12px 18px">Submit</CustomButton>
      </form>
    </ChakraProvider>
  );
}
