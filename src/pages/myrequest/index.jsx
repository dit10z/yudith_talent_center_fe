import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import Navbar from "../../components/appbar/Navbar";
import {
  CloudDownloadOutlined,
  DeleteForeverOutlined,
  ErrorOutline,
  KeyboardArrowRight,
} from "@mui/icons-material";
import CardWishlist from "../../components/card/CardWishlist";

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },

  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(155, 155, 155, 0.8)",
    zIndex: 999,
  },

  title: {
    padding: "0 50px 10px 50px",
    text: {
      font: "700 28px Poppins",
      color: "#212121",
    },
  },

  progressBar: {
    width: "inherit",
    boxShadow: "0px 5px 20px 0px #0000001A",
  },

  warningBar: {
    boxShadow: "0px 5px 20px 0px #0000001A",
    padding: "15px 50px",
    borderRadius: "5px",
    text: {
      font: "400 14px Inter",
      color: "#212121",
      alignItems: "center",
      display: "flex",
    },
    icon: {
      color: "#EBCA1D",
    },
  },
  item: {
    alignItems: "center",
  },

  button: {
    statusBar: {
      textTransform: "none",
      borderRadius: "0px",
      color: "#848484",
      "&:focus": {
        color: "#2C8AD3",
        borderBottom: "2px solid #2C8AD3",
      },
    },
  },

  content: {
    padding: "20px 50px",
    borderRadius: "5px",
    boxShadow: "0px 5px 20px 0px #0000001A",
    gap: "25px",
  },
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
const buttonGroup = {
  gap: "10px",
  alignItems: "flex-start",
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
const actionCardContainer = {
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",
};

const MyRequest = () => {
  return (
    <Grid container sx={styles.container}>
      <Grid item lg={12}>
        <Navbar />
      </Grid>
      <Grid item lg={8}>
        <Grid container direction="column" gap="25px">
          <Grid item={8} sx={styles.title}>
            <Typography sx={styles.title.text}>My Request</Typography>
          </Grid>
          <Grid item={8} sx={styles.progressBar}>
            <Stack direction="row" sx={styles.item}>
              <Button sx={styles.button.statusBar} fullWidth>
                All
              </Button>
              <Button sx={styles.button.statusBar} fullWidth>
                In Progress
              </Button>
              <Button sx={styles.button.statusBar} fullWidth>
                Approved
              </Button>
              <Button sx={styles.button.statusBar} fullWidth>
                Rejected
              </Button>
            </Stack>
          </Grid>
          <Grid item lg={8} sx={styles.warningBar}>
            <Stack direction="row" gap="25px">
              <ErrorOutline sx={styles.warningBar.icon} />
              <Typography sx={styles.warningBar.text}>
                All request is checked by Tujuh Sembilan Admin
              </Typography>
            </Stack>
          </Grid>
          <Grid direction="row" sx={contentContainer}>
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
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyRequest;
