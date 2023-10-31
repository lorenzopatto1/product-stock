import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    fontFamily: "Nunito-Sans, sans-serif",
    minHeight: "100vh",
  },
  body: {
    backgroundColor: "$gray800",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
    maxWidth: "100vw",
    minHeight: "100vh",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  button: {
    cursor: "pointer",
    background: "transparent",
    border: "none",
  },
  ul: {
    listStyle: "none",
  },
  input: {
    outline: "none",
    border: "none",
  },
});
