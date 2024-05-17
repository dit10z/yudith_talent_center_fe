import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Container, Typography, Box, Divider, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import logofooter from "../assets/logotujuhsembilan.png";

const usefulLinks = [
  { url: "Home", path: "/" },
  { url: "Our Technologies", path: "/" },
  { url: "Why Choose Us", path: "/" },
  { url: "Testimonials", path: "/" },
  { url: "Contact", path: "/" },
];

const Footer = () => {
  return (
    <Box width="100%">
      <Container
        maxWidth="false"
        sx={{ py: { md: "5rem" }, backgroundColor: "#142B51" }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: { md: "left" },
            width: "100%",
            flexDirection: { md: "row" },
            gap: { md: "20rem" },
          }}
        >
          <Grid item>
            <Typography sx={{ fontWeight: 500, color: "white" }}>
              Useful Links
            </Typography>
            <Divider
              color="#FF6E1D"
              sx={{
                width: "40%",
                marginLeft: { md: "0px" },
                marginRight: { md: "0px" },
                my: "0.5rem",
                height: "1.5px",
              }}
            />
            <Grid container sx={{ display: "flex", flexDirection: "column" }}>
              {usefulLinks.map((link) => {
                return (
                  <>
                    <Link
                      href={link.path}
                      sx={{
                        fontWeight: 300,
                        my: "0.25rem",
                        textDecoration: "none",
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      {link.url}{" "}
                    </Link>
                  </>
                );
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: 500, color: "white" }}>
              Contact Us
            </Typography>
            <Divider
              color="#FF6E1D"
              sx={{
                width: "20%",
                marginLeft: { md: "0px" },
                marginRight: { md: "0px" },
                my: "0.5rem",
                height: "1.5px",
              }}
            />
            <Grid container sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{ color: "white", fontSize: "14px", fontWeight: 300 }}
              >
                <span style={{ fontWeight: 500 }}> Address: </span> Kompleks
                Terasana No.6A
                <br />
                Jalan Cihampelas (Bawah)
                <br />
                Bandung 40171
              </Typography>
              <Typography
                sx={{
                  my: "0.25rem",
                  color: "white",
                  fontSize: "14px",
                  fontWeigth: 300,
                }}
              >
                <span style={{ fontWeight: 500 }}> Phone: </span> (022) 20505455
              </Typography>
              <Typography
                sx={{ my: "0.25rem", color: "white", fontSize: "14px" }}
              >
                <span style={{ fontWeight: 500 }}> Follow Us On </span>
              </Typography>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: { md: "flex-start" },
                  gap: "20px",
                }}
              >
                <Grid item>
                  <Link sx={{ color: "white" }}>
                    <Facebook />
                  </Link>
                </Grid>
                <Grid item>
                  <Link sx={{ color: "white" }}>
                    <Instagram />
                  </Link>
                </Grid>
                <Grid item>
                  <Link sx={{ color: "white" }}>
                    <YouTube />
                  </Link>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{ display: "flex", justifyContent: { md: "flex-start" } }}
              >
                <img
                  src={logofooter}
                  alt="Logo"
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="false"
        sx={{ background: "#081E43", padding: "20px", textAlign: "center" }}
      >
        <Typography variant="body2" sx={{ color: "white", fontWeigth: 300 }}>
          <span style={{ fontWeight: 500 }}> &copy; Copyright 2023</span> <br />{" "}
          Privacy Policy Design <br /> By Tujuh Sembilan
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
