import React from "react";
import AdminLayout from "../../layouts/admin";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  TableBody,
  Stack,
  Pagination,
} from "@mui/material";
import { AddCircleOutline, Check, Close } from "@mui/icons-material";
import { Chip } from "@mui/material";

const ChipStatusApproved = ({ status }) => {
  const getIcon = (type) => {
    let icon;
    switch (type) {
      case "Approved":
        icon = (
          <Chip
            label="Approved"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#30A952",
              color: "#ffff",
            }}
          />
        );
        break;
      case "Rejected":
        icon = (
          <Chip
            label="Rejected"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#CF1D1D",
              color: "#ffff",
            }}
          />
        );
        break;
      case "On Progress":
        icon = (
          <Chip
            label="On Progress"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#586A84",
              color: "#ffff",
            }}
          />
        );
        break;
      default:
        break;
    }
    return icon;
  };

  return getIcon(status);
};

const styles = {
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(155, 155, 155, 0.8)",
    zIndex: 999,
  },
  grid: {
    addTalent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: "25px",
      button: {
        padding: "10px 20px",
        color: "#2C8AD3",
        alignItems: "center",
      },
      text: {
        textTransform: "none",
        color: "#ffff",
        font: "400 14px Inter",
      },
    },
  },
  text: {
    pageTitle: {
      font: "700 22px Poppins",
      color: "#3B4758",
      margin: "0 0 10px 0",
    },
  },
  button: {
    action: {
      approveTalent: {
        backgroundColor: "#30A952",
      },
      rejectedTalent: {
        backgroundColor: "#CF1D1D",
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
    },
  },
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

const ApproveList = () => {
  return (
    <AdminLayout>
      <Box sx={{ padding: "24px" }}>
        <Grid container spacing={4}>
          <Grid item lg={12} xs={12}>
            <Typography sx={styles.text.pageTitle}>
              Daftar Persetujuan Talent
            </Typography>
            <Grid container spacing={2} marginBottom="25px">
              <Grid item lg={4} xs={12}>
                <Autocomplete
                  sx={{
                    "& fieldset": { border: "1px solid #2C8AD3" },
                  }}
                  size="small"
                  freeSolo
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      color="primary"
                      {...params}
                      label="Cari"
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item lg={2} xs={12}>
                <Autocomplete
                  fullWidth
                  size="small"
                  sx={{
                    "& fieldset": { border: "1px solid #2C8AD3" },
                  }}
                  disablePortal
                  renderInput={(params) => (
                    <TextField {...params} label="Filter Level" />
                  )}
                />
              </Grid>
              <Grid item lg={2} xs={12}>
                <Autocomplete
                  size="small"
                  sx={{
                    "& fieldset": { border: "1px solid #2C8AD3" },
                  }}
                  disablePortal
                  renderInput={(params) => (
                    <TextField {...params} label="Filter Status" />
                  )}
                />
              </Grid>
              <Grid item lg={2} xs={12}>
                <Autocomplete
                  size="small"
                  sx={{
                    "& fieldset": { border: "1px solid #2C8AD3" },
                  }}
                  disablePortal
                  renderInput={(params) => (
                    <TextField {...params} label="Filter Status" />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box marginBottom="25px">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Instansi</TableCell>
                  <TableCell align="center">Tanggal Request</TableCell>
                  <TableCell align="center">Talent yang dipilih</TableCell>
                  <TableCell align="center"> Status</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Grid>PT Makmur</Grid>
                  </TableCell>
                  <TableCell align="center">05/13/2024</TableCell>
                  <TableCell align="center">John Doe</TableCell>
                  <TableCell align="center">
                    <ChipStatusApproved status="Approved" />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" sx={styles.button.action}>
                      <Button
                        variant="contained"
                        sx={styles.button.action.approveTalent}
                      >
                        <Check />
                      </Button>
                      <Button
                        variant="contained"
                        sx={styles.button.action.rejectedTalent}
                      >
                        <Close />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Grid>PT Makmur</Grid>
                  </TableCell>
                  <TableCell align="center">05/13/2024</TableCell>
                  <TableCell align="center">John Doe</TableCell>
                  <TableCell align="center">
                    <ChipStatusApproved status="Approved" />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" sx={styles.button.action}>
                      <Button
                        variant="contained"
                        sx={styles.button.action.approveTalent}
                      >
                        <Check />
                      </Button>
                      <Button
                        variant="contained"
                        sx={styles.button.action.rejectedTalent}
                      >
                        <Close />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Grid>PT Makmur</Grid>
                  </TableCell>
                  <TableCell align="center">05/13/2024</TableCell>
                  <TableCell align="center">John Doe</TableCell>
                  <TableCell align="center">
                    <ChipStatusApproved status="Approved" />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" sx={styles.button.action}>
                      <Button
                        variant="contained"
                        sx={styles.button.action.approveTalent}
                      >
                        <Check />
                      </Button>
                      <Button
                        variant="contained"
                        sx={styles.button.action.rejectedTalent}
                      >
                        <Close />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Grid>PT Makmur</Grid>
                  </TableCell>
                  <TableCell align="center">05/13/2024</TableCell>
                  <TableCell align="center">John Doe</TableCell>
                  <TableCell align="center">
                    <ChipStatusApproved status="Approved" />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" sx={styles.button.action}>
                      <Button
                        variant="contained"
                        sx={styles.button.action.approveTalent}
                      >
                        <Check />
                      </Button>
                      <Button
                        variant="contained"
                        sx={styles.button.action.rejectedTalent}
                      >
                        <Close />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Grid>PT Makmur</Grid>
                  </TableCell>
                  <TableCell align="center">05/13/2024</TableCell>
                  <TableCell align="center">John Doe</TableCell>
                  <TableCell align="center">
                    <ChipStatusApproved status="Approved" />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" sx={styles.button.action}>
                      <Button
                        variant="contained"
                        sx={styles.button.action.approveTalent}
                      >
                        <Check />
                      </Button>
                      <Button
                        variant="contained"
                        sx={styles.button.action.rejectedTalent}
                      >
                        <Close />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Grid>PT Makmur</Grid>
                  </TableCell>
                  <TableCell align="center">05/13/2024</TableCell>
                  <TableCell align="center">John Doe</TableCell>
                  <TableCell align="center">
                    <ChipStatusApproved status="Approved" />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" sx={styles.button.action}>
                      <Button
                        variant="contained"
                        sx={styles.button.action.approveTalent}
                      >
                        <Check />
                      </Button>
                      <Button
                        variant="contained"
                        sx={styles.button.action.rejectedTalent}
                      >
                        <Close />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Grid>PT Makmur</Grid>
                  </TableCell>
                  <TableCell align="center">05/13/2024</TableCell>
                  <TableCell align="center">John Doe</TableCell>
                  <TableCell align="center">
                    <ChipStatusApproved status="Approved" />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" sx={styles.button.action}>
                      <Button
                        variant="contained"
                        sx={styles.button.action.approveTalent}
                      >
                        <Check />
                      </Button>
                      <Button
                        variant="contained"
                        sx={styles.button.action.rejectedTalent}
                      >
                        <Close />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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
                {/* <EntriesToggleButtonGroup value={null} onChange={null} /> */}
              </Stack>
            </Stack>
            <Pagination
              sx={styles.paginations}
              shape="rounded"
              // count={null}
              // page={null}
              // onChange={null}
            />
          </Grid>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default ApproveList;
