"use client";
import * as React from "react";
import {useState} from "react";
import styles from "../styles.module.scss";
import {Button, ChakraProvider, Checkbox} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import FormInput from "@/components/Input/FormInput";
import FormRow from "@/components/Input/FormRow";
import FormTextarea from "@/components/Input/FormTextarea";
import CustomButton from "@/components/CustomButton";
import {sendChatMessage} from "../../../../bots/telegramBot";
import { sendContactForm } from "../../../lib/api";

export default function ContactUsForm() {
  const { control, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const onSubmit = async (data) => {
        setLoading(true)
        const chatId = '-4110982264';
        const messageText = `Title: Chat \nName: ${data.name}\nCompany Name: ${data.company_name}\nEmail: ${data.email}\nPhone: ${data.phone}\nTruck Amount: ${data.amount}\nMessage: ${data.message}`;

        try {
            await sendContactForm(values);
            await sendChatMessage(chatId, messageText).then(() => {
                setLoading(false);
            }).catch(() => {
                setError('Failed to send message')
                setLoading(false);
            });
        } catch (error) {
            console.log(error.message)
        }
    }

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
