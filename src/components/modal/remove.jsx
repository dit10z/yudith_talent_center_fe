import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box, Typography } from "@mui/material";

const RemoveModal = (props) => {
  const { open, onClose, title, message, handleDelete } = props;

  const handleDeleteButton = () => {
    handleDelete();
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            textAlign: "left",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url()`,
              backgroundSize: "cover",
              width: "48px",
              height: "48px",
            }}
          ></Box>
          <DialogContentText id="alert-dialog-description">
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: 700,
                fontColor: "#101828",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 400,
                fontColor: "#848484",
              }}
            >
              {message}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ borderColor: "#D0D5DD", color: "#344054" }}
          >
            <Typography
              sx={{
                textTransform: "none",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              Cancel
            </Typography>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleDeleteButton();
              window.location.reload();
            }}
            alignItems="center"
            color="error"
          >
            <Typography
              sx={{
                textTransform: "none",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 600,
                fontColor: "#FFFFFF",
                lineHeight: "24px",
              }}
            >
              Delete
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RemoveModal;
