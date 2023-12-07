import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  gap: 8,
  flexDirection: "column",
  width: "100%",
  input: {
    padding: "1rem",
    fontSize: "$md",
    borderRadius: ".5rem",
    backgroundColor: "$gray400",
    color: "$gray100",
    "&::placeholder": {
      color: "$gray100",
    },
  },
});

export const FormErrorMessage = styled("div", {
  color: "#f00000",
});
