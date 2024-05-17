import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const ButtonSecond = ({ text }) => {
  const style = {
    color: "#848484",
    borderRadius: "5px",
    padding: "7px 20px",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "none",
    border: "1px solid grey",
  };
  return (
    <Button
      variant="outlined"
      startIcon={<GoogleIcon style={{ fontSize: "17px" }} />}
      sx={style}
    >
      {text}
    </Button>
  );
};

export default ButtonSecond;
