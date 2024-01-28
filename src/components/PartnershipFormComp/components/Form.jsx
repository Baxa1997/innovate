"use client";
import * as React from "react";
import styles from "../styles.module.scss";
import {Button, ChakraProvider} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import FormInput from "@/components/Input/FormInput";
import FormRow from "@/components/Input/FormRow";
import FormTextarea from "@/components/Input/FormTextarea";

export default function PartnershipForm() {
    const {control, handleSubmit} = useForm();

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
                    <FormInput control={control} name="email"/>
                </FormRow>
                <FormRow
                    label="Company Name"
                    color="#344054"
                    labelStyle={{
                        fontSize: "14px",
                        marginBottom: "6px",
                    }}
                >
                    <FormInput control={control} name="email"/>
                </FormRow>
                <FormRow
                    label="Email"
                    color="#344054"
                    labelStyle={{
                        fontSize: "14px",
                        marginBottom: "6px",
                    }}
                >
                    <FormInput control={control} name="email"/>
                </FormRow>
                <FormRow
                    label="Phone Number"
                    color="#344054"
                    labelStyle={{
                        fontSize: "14px",
                        marginBottom: "6px",
                    }}
                >
                    <FormInput control={control} name="email"/>
                </FormRow>
                <FormRow
                    label="How are you interested in partnering with us?"
                    color="#344054"
                    labelStyle={{
                        fontSize: "14px",
                        marginBottom: "6px",
                    }}
                >
                    <FormTextarea control={control} name="email"/>
                </FormRow>

                <Button backgroundColor={'rgb(21, 112, 239)'} color={'white'} width={'full'}
                        padding="12px 18px">Submit</Button>
            </form>
        </ChakraProvider>
    );
}
