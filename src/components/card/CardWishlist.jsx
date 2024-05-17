import { FiberManualRecord } from "@mui/icons-material";
import { Avatar, Chip, Grid, Stack, Typography } from "@mui/material";
import TextBox from "../TextBox";

const cardContainer = {
  width: "auto",
  gap: "30px",
};

const contentContainer = {
  gap: "25px",
};

const name = {
  font: "700 22px Poppins",
  color: "#2C8AD3",
};

const level = {
  font: "400 14px Inter",
  color: "#848484",
};

const subContent = {
  alignItems: "center",
  gap: "10px",
};

const experience = {
  title: {
    font: "600 18px Poppins",
    color: "#212121",
  },
  skill: {
    padding: "2px 10px",
    height: "20px",
    backgroundColor: "#E4EEF6",
    borderRadius: "3px",
  },
};

const CardWishlist = (props) => {
  return (
    <Grid container sx={cardContainer}>
      <Grid item>
        <Avatar
          alt="profile"
          src="url"
          sx={{ width: "125px", height: "125px", borderRadius: "50%" }}
        />
      </Grid>
      <Grid item>
        <Stack sx={contentContainer}>
          <Stack gap="5px">
            <Stack direction="row" sx={subContent}>
              <Chip
                sx={{ padding: "4px 15px" }}
                label="Available"
                color="success"
                variant="outlined"
                size="small"
              />
              <Typography sx={name}>John Doe</Typography>
            </Stack>
            <Stack direction="row" sx={subContent}>
              <Typography sx={level}>5 Years of Experience</Typography>
              <FiberManualRecord sx={{ width: "3px", color: "#848484" }} />
              <Typography sx={level}>Senior Level</Typography>
            </Stack>
          </Stack>
          <Stack gap="5px">
            <Typography sx={experience.title}>Position</Typography>
            <Stack direction="row" sx={{ ...subContent, flex: "wrap" }}>
              <TextBox> Apa coba </TextBox>
              <Chip
                label="talent"
                sx={{
                  borderRadius: 1,
                  backgroundColor: "var(--light-blue)",
                  color: "var(--black)",
                }}
              />
            </Stack>
          </Stack>
          <Stack gap="5px">
            <Typography sx={experience.title}>Skill Set</Typography>
            <Stack direction="row" sx={{ ...subContent, flexWrap: "wrap" }}>
              <TextBox>bebas</TextBox>
              <Chip
                label="skill"
                sx={{
                  borderRadius: 1,
                  backgroundColor: "var(--light-blue)",
                  color: "var(--black)",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CardWishlist;
