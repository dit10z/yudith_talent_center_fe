import { CheckCircleOutlineRounded } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import React from "react";

const RequestModal = (props) => {
  const { open, onClose } = props;

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CheckCircleOutlineRounded
            sx={{ color: "#30A952", width: "116px", height: "116px" }}
          />
          <DialogContentText id="alert-dialog-description">
            <Typography
              sx={{
                alignItems: "center",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: 700,
                fontColor: "#101828",
              }}
            >
              Your Request is in Proccess!
            </Typography>
            <Typography
              sx={{
                alignItems: "center",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 400,
                fontColor: "#848484",
              }}
            >
              You can check your request status at "My Request!" menu
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={() => {
              onClose();
              window.location.reload();
            }}
            alignItems="center"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RequestModal;
