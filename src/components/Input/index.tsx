import { ForwardRefRenderFunction, forwardRef } from "react";
import { Container, FormErrorMessage } from "./styles";
import { FieldError } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, name, label, error = undefined, ...rest },
  ref
) => {
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}

      <input type={type} name={name} id={name} ref={ref} {...rest} />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
