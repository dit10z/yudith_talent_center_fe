import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  CheckCircle,
  Close,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonSecond from "../button/ButtonSecond";

const RegisterModal = ({ open, onClose, color }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passRepeat, setPassRepeat] = useState("");
  const [showPassRepeat, setShowPassRepeat] = useState(false);
  const [errors, setErrors] = useState({});

  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "350px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: "20px 20px 30px 20px",
            borderRadius: "10px",
          }}
        >
          <Stack spacing={"5px"}>
            <Stack
              style={{
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Button
                endIcon={
                  <Close
                    onClick={onClose}
                    style={{
                      color: "black",
                      marginRight: "15px",
                    }}
                  />
                }
              ></Button>
            </Stack>
            <Stack
              spacing={"35px"}
              padding={"5px 20px 5px 20px"}
              maxWidth={"430px"}
            >
              <Stack spacing={"5px"}>
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "22px",
                    alignItems: "center",
                    fontWeight: 800,
                    lineHeight: "33px",
                  }}
                >
                  Register
                </Typography>
                <Typography
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#848484",
                  }}
                >
                  Register so you can choose and request our talent
                </Typography>
              </Stack>
              <Stack spacing={"20px"}>
                <Stack direction="row" spacing={"10px"}>
                  <TextField
                    type="text"
                    name="first_name"
                    label="First Name"
                    size="small"
                  />
                  <TextField
                    type="text"
                    name="last_name"
                    label="Last Name"
                    size="small"
                  />
                </Stack>
                <TextField
                  type="email"
                  label="Email"
                  name="email"
                  size="small"
                />
                <Stack spacing={"10px"}>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    name="password"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? (
                              <Visibility
                                style={{
                                  fontSize: "20px",
                                }}
                              />
                            ) : (
                              <VisibilityOff
                                style={{
                                  fontSize: "20px",
                                }}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Stack spacing={"7px"}>
                    <Box display="flex" alignItems="center">
                      <CheckCircle
                        style={{
                          fontSize: "15px",
                          color: "#30A952",
                          marginRight: "10px",
                        }}
                      />
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "#30A952",
                          fontWeight: 400,
                        }}
                      >
                        Password is at least 8 characters long
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <CheckCircle
                        style={{
                          fontSize: "15px",
                          color: "#30A952",
                          marginRight: "10px",
                        }}
                      />
                      <Typography
                        style={{
                          fontSize: "13px",
                          color: "#30A952",
                          fontWeight: 400,
                        }}
                      >
                        Password is at least 8 characters long
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                <TextField
                  label="Type in your password again"
                  name="passRepeat"
                  type={showPassRepeat ? "text" : "password"}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassRepeat(!showPassRepeat)}
                          edge="end"
                        >
                          {showPassRepeat ? (
                            <Visibility
                              style={{
                                fontSize: "20px",
                              }}
                            />
                          ) : (
                            <VisibilityOff
                              style={{
                                fontSize: "20px",
                              }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Sex
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      name="sex"
                      sx={{ color: "#848484" }}
                      value="L"
                      control={<Radio size="small" />}
                      label="Male"
                    />
                    <FormControlLabel
                      name="sex"
                      sx={{ color: "#848484" }}
                      value="P"
                      control={<Radio size="small" />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField name="birth_date" type="date" size="small" />
                <Select
                  name="client_position_id"
                  size="small"
                  fullWidth
                  displayEmpty
                >
                  <MenuItem value="">
                    <Typography sx={{ color: "#848484" }}>
                      Client Position
                    </Typography>
                  </MenuItem>
                </Select>
                <TextField
                  type="text"
                  name="agency_name"
                  label="Agency Name"
                  size="small"
                />
              </Stack>
              <TextField
                name="agency_address"
                id="outlined-multiline-static"
                label="Agency Address"
                multiline
                rows={2}
                defaultValue=""
              />
              <Stack spacing={"20px"}>
                <ButtonPrimary
                  type="submit"
                  onClick={handleSubmit}
                  text="Register"
                />
                <Divider
                  style={{
                    border: "1px solid #DBDBDB",
                  }}
                />
                <ButtonSecond text="Continue with Google" />
              </Stack>
              <Stack
                style={{
                  direction: "row",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    color: "#212121",
                    fontWeight: 400,
                  }}
                >
                  Already have an Account ? Sign in Here
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Username"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form> */}
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;
