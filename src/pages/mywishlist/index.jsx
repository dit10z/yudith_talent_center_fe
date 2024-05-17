import {
  Box,
  Button,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RequestModal from "../../components/modal/RequestModal";
import RemoveModal from "../../components/modal/remove";
import Navbar from "../../components/appbar/Navbar";
import { useApi } from "../../hooks/use-api";
import CardWishlist from "../../components/card/CardWishlist";
import {
  CloudDownloadOutlined,
  DeleteForeverOutlined,
  DeleteOutlined,
  KeyboardArrowRight,
} from "@mui/icons-material";

const mainContainer = {
  // padding: '55px 0px'
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  height: "100%",
};

const contentContainer = {
  boxShadow: "0px 5px 20px 0px #0000001A",
  padding: "0px 50px",
  borderRadius: "16px",
  alignItems: "flex-start",
  gap: "30px",
  maxHeight: "70%",
  autoflow: "auto",
};

const cardContent = {
  padding: "30px 40px",
  gap: "10px",
  justifyContent: "space-between",
  width: "100%",
};

const titlePage = {
  font: "700 28px Poppins",
  color: "#212121",
  container: {
    padding: "0px 50px",
  },
};

const actionCardContainer = {
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",
};

const buttonGroup = {
  gap: "10px",
  alignItems: "flex-start",
};

const button = {
  remove: {
    color: "#CF1D1D",
    textTransform: "none",
    font: "500 14px Inter",
  },
  detail: {
    color: "#2C8AD3",
    textTransform: "none",
    font: "500 14px Inter",
  },
  download: {
    color: "#848484",
    textTransform: "none",
    font: "500 14px Inter",
  },
  request: {
    fontColor: "#FDFDFD",
    backgroundColor: "#2C8AD3",
    textTransform: "none",
    font: "500 14px Inter",
  },
};

const buttonAction = {
  request: {
    color: "#ffff",
    textTransform: "none",
    font: "500 14px Inter",
    padding: "10px 20px",
  },
  remove: {
    color: "#CF1D1D",
    textTransform: "none",
    font: "500 14px Inter",
    padding: "10px 20px",
  },
};

const emptyImage = {
  width: "360px",
  height: "288px",
};

const MyWishlist = () => {
  const [openResquestModal, setOpenRequestModal] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const { data: wishlistData } = useApi("/wishlistData");

  const handleCloseModal = () => {
    setOpenRequestModal(false);
    setOpenRemoveModal(false);
  };

  return (
    <Grid container sx={mainContainer}>
      <Grid>
        <Navbar />
      </Grid>
      <RequestModal open={openResquestModal} onClose={handleCloseModal} />
      <RemoveModal
        open={openRemoveModal}
        onClose={handleCloseModal}
        title={"Remove all wishlist"}
        message={"Are you sure?"}
      />
      <Grid item lg={8} sx={titlePage.container}>
        <Typography sx={titlePage}>My Wishlist</Typography>
      </Grid>
      <Grid container item lg={8} sx={contentContainer}>
        <Stack direction="row" sx={cardContent}>
          <CardWishlist />
          <Stack direction="row" sx={actionCardContainer}>
            <Divider orientation="vertical" size="small" variant="middle" />
            <Stack sx={buttonGroup}>
              <Button startIcon={<KeyboardArrowRight />} sx={button.detail}>
                See Detail
              </Button>
              <Button
                startIcon={<CloudDownloadOutlined />}
                sx={button.download}
              >
                Download CV
              </Button>
              <Button startIcon={<DeleteForeverOutlined />} sx={button.remove}>
                Remove
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        lg={8}
        sx={{
          alignItems: "center",
          justifyContent: "flex-end",
          display: "flex",
          boxShadow: "0px 5px 20px 0px #0000001A",
          gap: "30px",
          padding: "15px 50px",
          borderRadius: "16px",
          marginBottom: "30px",
        }}
      >
        <Button startIcon={<DeleteOutlined />} sx={buttonAction.remove}>
          Remove All
        </Button>
        <Button variant="contained" sx={buttonAction.request}>
          Request Talent
        </Button>
      </Grid>
    </Grid>
  );
};

export default MyWishlist;
