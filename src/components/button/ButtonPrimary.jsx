import { Button } from "@mui/material";

const ButtonPrimary = ({ text, type, onClick }) => {
  const customStyle = {
    backgroundColor: "#2C8AD3",
    color: "#FDFDFD",
    borderRadius: "5px",
    padding: "7px 20px",
    fontSize: "14px",
    fontWeight: 400,
    textTransform: "none",
  };
  return (
    <Button
      type={type}
      onClick={onClick}
      variant="contained"
      style={customStyle}
    >
      {text}
    </Button>
  );
};

export default ButtonPrimary;
