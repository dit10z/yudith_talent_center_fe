import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logoAdmin from "../../assets/logoadmin.png";

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SidebarAdmin = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: "center" }}>
          <img
            alt="sidebarLogo"
            style={{
              height: open ? "93px" : "25px",
              width: open ? "208px" : "130px",
            }}
            src={logoAdmin}
          />
        </DrawerHeader>
        <Divider />
        <List sx={{ height: "80%", justifyContent: "space-between" }}>
          <Stack gap="20px" padding="0px 16px">
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  borderRadius: "5px",
                  minHeight: 70,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor: "#2C8AD3", // Warna latar belakang saat hover
                  },
                  width: "auto",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  borderRadius: "5px",
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor: "#2C8AD3", // Warna latar belakang saat hover
                  },
                  "&:focus": {
                    backgroundColor: "#2C8AD3",
                  },
                  width: "auto",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Daftar Talent"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  borderRadius: "5px",
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor: "#2C8AD3", // Warna latar belakang saat hover
                  },
                  "&:focus": {
                    backgroundColor: "#2C8AD3",
                  },
                  width: "auto",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <BusinessCenterIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Daftar Client"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block", width: "auto" }}>
              <ListItemButton
                sx={{
                  borderRadius: "5px",
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor: "#2C8AD3", // Warna latar belakang saat hover
                  },
                  "&:focus": {
                    backgroundColor: "#2C8AD3",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Persetujuan Talent"
                  sx={{ opacity: open ? 1 : 0, width: "auto" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  borderRadius: "5px",
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor: "#2C8AD3", // Warna latar belakang saat hover
                  },
                  "&:focus": {
                    backgroundColor: "#2C8AD3",
                  },
                  width: "auto",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Kelola User"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Stack>
        </List>
        <Box
          display="flex"
          alignItems="center"
          sx={{ marginTop: 5, marginLeft: 5, height: "auto" }}
        >
          <IconButton onClick={() => setOpen(!open)}>
            <ChevronLeftIcon
              sx={{
                backgroundColor: "blue",
                borderRadius: "50%",
                color: "white",
                fontSize: "20px",
                marginLeft: open ? "15px" : "-30px",
                transition: "margin-left 0.2s ease-in-out",
              }}
            />
          </IconButton>
          <Typography sx={{ visibility: open ? "visible" : "hidden" }}>
            Colapse
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SidebarAdmin;
