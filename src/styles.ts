import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Header = styled("header", {
  width: "100%",
  height: "120px",
  padding: "2rem",
  display: "flex",
  justifyContent: "space-around",
  div: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  span: {
    fontSize: "$2xl",
    fontWeight: "bold",
  },
  img: {
    width: "60px",
  },
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

export const Nav = styled("nav", {
  ul: {
    display: "flex",
    gap: 30,
  },
  "li:hover": {
    color: "$gray300",
  },
});

export const Main = styled("main", {
  padding: "0 5rem",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: 8,
  h1: {
    marginTop: "2.5rem",
  },

  "> div": {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    padding: ".5rem 2rem",
    gap: "1rem",
  },
});
