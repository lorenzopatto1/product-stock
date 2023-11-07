import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "absolute",
  backgroundColor: "$gray800",
  zIndex: 1,

  svg: {
    cursor: "pointer",
    position: "absolute",
    top: "30px",
    left: "8px",
  },
});

export const Form = styled("form", {
  marginTop: "1rem",
  display: "flex",
  width: "40vw",
  borderRadius: ".5rem",
  backgroundColor: "$gray700",
  flexDirection: "column",
  alignItems: "center",
  padding: "5rem 3rem",
  gap: "1rem",

  button: {
    border: "1px solid $purple100",
    color: "$purple100",
    padding: "1rem",
    borderRadius: ".5rem",
    fontWeight: "bold",
    fontSize: "$md",
    lineHeight: "$base",
    transition: "all linear .1s",
    "&:hover": {
      backgroundColor: "$purple100",
      color: "$gray100",
    },
  },
});
