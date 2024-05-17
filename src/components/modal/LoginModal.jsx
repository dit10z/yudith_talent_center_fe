// src/components/LoginModal.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonSecond from "../button/ButtonSecond";
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useSignIn } from "../../hooks/use-signin"; // Ensure the path is correct
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Kolom email tidak boleh kosong.",
    })
    .max(100, {
      message: "Format email belum sesuai.",
    })
    .refine((value) => !/\s/.test(value), {
      message: "Format email belum sesuai.",
    }),
  password: z
    .string()
    .min(1, {
      message: "Kolom Kata Sandi tidak boleh kosong.",
    })
    .min(6, {
      message: "Kata sandi tidak boleh kurang dari 6 karakter.",
    })
    .max(50, {
      message: "Kata sandi tidak sesuai.",
    })
    .refine((value) => /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(value), {
      message:
        "Kata sandi harus memiliki minimal 6 karakter kombinasi angka/huruf.",
    }),
});

const LoginModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, login } = useAuth();

  const {
    register,
    onSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    try {
      await signIn(email, password);

      toast.success("Login Berhasil");
      navigate("/mainPage");
    } catch (err) {
      toast.error("Login Failed");
      console.error("Error is", err);
    }
  };

  // useEffect(() => {
  //   if (!isSuccess) return;
  //   toast("Login Berhasil");
  //   login();
  //   navigate("/mainPage");
  // }, [isSuccess]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
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
            <Button onClick={onClose}>
              <Close
                style={{
                  color: "black",
                  marginRight: "15px",
                }}
              />
            </Button>
          </Stack>
          <Stack
            spacing={"10px"}
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
                Welcome Back
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#848484",
                }}
              >
                Please sign in first to explore further on our website
              </Typography>
            </Stack>
            <TextField
              type="email"
              label="Email"
              name="email"
              size="small"
              {...register("email")}
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                "aria-label": "Email",
                "data-testid": "email",
              }}
            />
            <Stack>
              <TextField
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                size="small"
                {...register("password")}
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  "aria-label": "Password",
                  "data-testid": "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword} edge="end">
                        {showPassword ? (
                          <Visibility style={{ fontSize: "20px" }} />
                        ) : (
                          <VisibilityOff style={{ fontSize: "20px" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack spacing={"20px"}>
              <ButtonPrimary
                type="submit"
                onClick={handleSubmit}
                text="Login"
              />
              <Divider style={{ border: "1px solid #DBDBDB" }} />
              <ButtonSecond text="Login with Google" />
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
                Don't have an account? Register Here
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default LoginModal;
