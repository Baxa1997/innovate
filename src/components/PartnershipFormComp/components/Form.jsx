"use client";
import FormInput from "@/components/Input/FormInput";
import FormRow from "@/components/Input/FormRow";
import FormTextarea from "@/components/Input/FormTextarea";
import { sendContactForm } from "@/lib/api";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles.module.scss";

export default function PartnershipForm() {
    const { control, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const onSubmit = (data) => {
        setLoading(true)
        console.log(data);
        const chatId = '-4110982264';
        const messageText = `Title: Partnership \nName: ${data.name}\nCompany Name: ${data.company_name}\nEmail: ${data.email}\nPhone: ${data.phone}\nPartnership Purpose: ${data.partnership_purpose}`;
        sendPartnerShipMessage(chatId, messageText).then(() => {
            sendContactForm(data)
            setLoading(false);
        }).catch(() => {
            setError('Failed to send message')
            setLoading(false);
        });
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
                    label="How are you interested in partnering with us?"
                    color="#344054"
                    labelStyle={{
                        fontSize: "14px",
                        marginBottom: "6px",
                    }}
                >
                    <FormTextarea control={control} name="partnership_purpose" />
                </FormRow>

                <Button backgroundColor={'rgb(21, 112, 239)'} color={'white'} width={'full'} type='submit'
                    padding="12px 18px" isLoading={loading}>Submit</Button>
                {error && <p>{error}</p>}
            </form>
        </ChakraProvider>
    );
}
