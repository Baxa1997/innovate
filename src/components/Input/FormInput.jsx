import { FormErrorMessage, Input, InputGroup } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const FormInput = ({
  styles = {},
  control,
  required = false,
  name,
  inputProps = {},
  disabled = false,
  defaultValue = "",
  placeholder = "",
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <InputGroup {...props}>
            <Input
              value={value}
              onChange={onChange}
              sx={styles}
              isInvalid={Boolean(error)}
              readOnly={disabled}
              placeholder={placeholder}
              {...inputProps}
              required={false}
            />
          </InputGroup>
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </>
      )}
    />
  );
};

export default FormInput;
