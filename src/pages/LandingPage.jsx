import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import ButtonTags from "../components/ButtonTags";
import {
  AppBar,
  Box,
  Button,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import bgImage from "../assets/bgImage.png";
import logo from "../assets/logo.png";
import RegisterModal from "../components/modal/RegisterModal";
import { useState } from "react";
import LoginModal from "../components/modal/LoginModal";

const LandingPage = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const styleContainer = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  };

  const container = {
    backgroundImage: `url(${bgImage})`,
    backgroundColor: "hsla(0,0%,0%,.7)",
    backgroundBlendMode: "multiply",
    backgroundSize: "200vh",
    fontFamily: "Poppins, sans-serif",
  };

  const styleHero = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
  };

  const styleTitle = {
    color: "#FFFF",
    fontSize: "53px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
  };

  const styleText = {
    color: "#FDFDFD",
    fontSize: "18px",
    fontWeight: 500,
    fontFamily: "Poppins, sans-serif",
  };

  const styleTags = {
    display: "flex",
    gap: "20px",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <>
      <Box sx={container}>
        <RegisterModal
          open={registerModal}
          onClose={() => setRegisterModal(false)}
        />
        <LoginModal open={loginModal} onClose={() => setLoginModal(false)} />
        <AppBar
          position="absolute"
          sx={{
            top: 0,
            height: { md: "106px" },
            borderRadius: 0,
            m: 0,
            padding: { md: "25px 50px" },
            backgroundColor: { md: "transparent" },
            backgroundImage: "unset",
            boxShadow: 0,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Toolbar>
            <img
              loading="lazy"
              alt="logo"
              style={{ height: "40px", width: "250px" }}
              src={logo}
            />
          </Toolbar>
          <Toolbar>
            <Box>
              <Button
                onClick={() => setRegisterModal(true)}
                variant="text"
                sx={{
                  color: "white",
                  px: { md: "25px" },
                  py: "7px",
                  textTransform: "none",
                  fontSize: "12px",
                }}
              >
                {" "}
                Register{" "}
              </Button>
              <Button
                onClick={() => setLoginModal(true)}
                variant="outlined"
                sx={{
                  color: "white",
                  borderRadius: "25px",
                  borderColor: "white",
                  px: { md: "25px" },
                  py: "7px",
                  textTransform: "none",
                  fontSize: "12px",
                }}
              >
                Sign In
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={styleContainer}>
          <Grid container spacing={5} sx={styleHero} direction="column">
            <Grid item xs={12} md={6} lg={4}>
              <Typography sx={styleTitle}>Welcome to Talent 79</Typography>
            </Grid>
            <Grid item xs={12} md={8} lg={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={12} md={6} lg={8} sx={styleTags}>
              <Typography sx={styleText}>Popular</Typography>
              <ButtonTags text="JavaScript" />
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default LandingPage;
