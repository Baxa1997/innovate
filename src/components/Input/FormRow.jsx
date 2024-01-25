import { Box, FormControl, FormLabel } from "@chakra-ui/react";

const FormRow = ({
  label = "",
  color,
  labelStyle,
  required = false,
  children,
  boxProps = {},
  boxClassName,
  ...props
}) => {
  return (
    <FormControl {...props} isRequired={required}>
      <FormLabel fontWeight={500} style={labelStyle} color={color}>
        {label}
      </FormLabel>

      <Box px={"1px"} {...boxProps} className={boxClassName}>
        {children}
      </Box>
    </FormControl>
  );
};

export default FormRow;
