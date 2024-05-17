import { Box } from "@mui/material";
import React from "react";
import SidebarAdmin from "../../components/appbar/SidebarAdmin";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SidebarAdmin />
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: "64px",
            backgroundColor: "#F1F6FF",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
