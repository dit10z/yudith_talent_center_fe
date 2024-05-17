import { Grid, Pagination, Stack, Typography } from "@mui/material";
import SideBar from "../../components/appbar/SideBar";
import CardTalent from "../../components/card/CardTalent";
import { talents } from "../../__mocks/talents";
import { useApi } from "../../hooks/use-api";
import Navbar from "../../components/appbar/Navbar";

const contentStyle = {
  width: "320px",
  flexShrink: 0,
  overflow: "auto",
  boxShadow: "0px 0px 20px 0px #0000001A",
};

const textStyle = {
  font: "400 14px Inter",
  color: "#212121",
};

const styles = {
  paginations: {
    ".css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root": {
      color: "#848484",
    },
    ".css-10w330c-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      color: "#2C8AD3",
      backgroundColor: "transparent",
      borderBottom: "1px solid #2C8AD3",
      borderBottomWidth: "3px",
      borderRadius: 0,
      "&.css-10w330c-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover":
        {
          backgroundColor: "transparent",
        },
    },
  },
};

const Main = () => {
  const { data: talents } = useApi("/talents");
  const { fetchData: post, ...post_states } = useApi("/talents");

  return (
    <Grid container direction="column">
      <Grid item lg={12}>
        <Navbar />
      </Grid>
      <div style={{ display: "flex" }}>
        <div style={contentStyle}>
          <SideBar />
        </div>
        <Grid container lg={12} sm={8} spacing={3} sx={{ padding: "35px" }}>
          <Grid
            item
            lg={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography style={textStyle}>
              Showing you 1-10 talents out of 15 total for
              <span style={{ fontWeight: 600 }}> "JavaScript"</span>
            </Typography>
            <Stack direction="row" alignItems="center" gap="10px">
              <Typography style={textStyle}>Sort By</Typography>
            </Stack>
          </Grid>
          {talents &&
            talents.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <CardTalent
                  name={item.name}
                  is_available={item.is_available}
                  experience={item.experience}
                  positions={item.positions}
                  skills={item.skills}
                  avatar={item.avatar}
                />
              </Grid>
            ))}
          <Grid
            item
            lg={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" alignItems="center">
              <Stack
                spacing={4}
                direction="row"
                alignItems="center"
                sx={{ flexGrow: 1, background: "none", padding: 0 }}
              >
                <Typography variant="body2" fontFamily="Inter">
                  Entries
                </Typography>
              </Stack>
            </Stack>
            <Pagination shape="rounded" sx={styles.paginations} />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default Main;
