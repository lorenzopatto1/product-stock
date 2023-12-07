import {
  ChangeEvent,
  ForwardRefRenderFunction,
  forwardRef,
  useState,
} from "react";
import { Container, FormErrorMessage } from "./styles";
import { FieldError } from "react-hook-form";

interface InputProps {
  placeholder?: string;
  step?: string;
  type: string;
  name: string;
  label?: string;
  error?: FieldError;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    type,
    name,
    label,
    error = undefined,
    value,
    onChange,
    placeholder,
    step,
    ...rest
  },
  ref
) => {
  const [inputValue, setInputValue] = useState(value);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        type={type}
        name={name}
        id={name}
        ref={ref}
        placeholder={placeholder}
        step={step}
        value={inputValue}
        onChange={handleInputChange}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
