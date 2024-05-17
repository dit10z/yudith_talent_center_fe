import { Typography } from "@mui/material";

const styles = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  padding: "2px 10px",
  height: "20px",
  backgroundColor: "#E4EEF6",
  borderRadius: "3px",
};

function TextBox({ children }) {
  return <Typography sx={styles}>{children}</Typography>;
}

export default TextBox;
