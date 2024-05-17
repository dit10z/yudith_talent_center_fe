import {
  AddOutlined,
  CloudDownloadOutlined,
  FiberManualRecord,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const ChipAvailable = () => {
  return (
    <Chip
      label="Available"
      sx={{ padding: "4px 15px" }}
      color="success"
      variant="outlined"
      size="small"
    />
  );
};

const ChipNotAvailable = () => {
  return (
    <Chip
      label="Not Available"
      sx={{ padding: "4px 15px", color: "#B71C1C", border: "2px solid red" }}
      variant="outlined"
      size="small"
    />
  );
};

const CardTalent = (props) => {
  const textBlock = {
    padding: "2px 10px",
    height: "20px",
    backgroundColor: "#E4EEF6",
    borderRadius: "3px",
  };

  const { avatar, is_available, name, experience, positions, skills } = props;

  return (
    <Stack
      sx={{
        padding: "20px 30px 20px 30px",
        boxShadow: "0px 0px 20px 0px #0000001A",
        borderRadius: "10px",
      }}
      gap="25px"
    >
      <Stack direction="row" gap="30px">
        <Avatar
          src={avatar}
          sx={{ width: "125px", height: "125px", borderRadius: "50%" }}
        />
        <CardContent sx={{ padding: "0px" }}>
          <Stack gap="25px">
            <Stack gap="5px">
              <Stack direction="row" alignItems="center" gap="10px">
                {is_available === true ? (
                  <ChipAvailable />
                ) : (
                  <ChipNotAvailable />
                )}
                <Typography sx={{ font: "700 22px Poppins", color: "#2C8AD3" }}>
                  {name}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap="10px">
                <Typography sx={{ font: "400 14px Inter", color: "#848484" }}>
                  {experience > 5 ? "5+" : experience} years of experience
                </Typography>
                <FiberManualRecord sx={{ width: "3px", color: "#848484" }} />
                <Typography sx={{ font: "400 14px Inter", color: "#848484" }}>
                  {experience >= 5 ? "Senior" : "Junior"} Level
                </Typography>
              </Stack>
            </Stack>
            <Stack gap="10px">
              <Typography sx={{ font: "600 18px Poppins", color: "#212121" }}>
                Position
              </Typography>
              <Stack direction="row" alignContent="center" gap="10px">
                {positions?.map((item, index) => (
                  <Typography key={index} sx={textBlock}>
                    {item.name}
                  </Typography>
                ))}
              </Stack>
              <Typography sx={{ font: "600 18px Poppins", color: "#212121" }}>
                Skill
              </Typography>
              <Stack direction="row" alignContent="center" gap="10px">
                {skills?.map((item, index) => (
                  <Typography key={index} sx={textBlock}>
                    {item.skillName}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Stack>
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Button
          startIcon={<CloudDownloadOutlined />}
          sx={{ textTransform: "none" }}
        >
          Download CV
        </Button>
        <Stack direction="row" gap="10px">
          <Button
            startIcon={<AddOutlined />}
            variant="outlined"
            sx={{ textTransform: "none" }}
          >
            Add to List
          </Button>
          <Button
            endIcon={<KeyboardArrowRightOutlined />}
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            See Detail
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardTalent;
