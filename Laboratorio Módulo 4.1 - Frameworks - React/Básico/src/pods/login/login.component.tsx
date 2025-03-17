import {
  Box,
  Button,
  Container,
  FormLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { User } from "./login.container";

interface Props {
  user: User;
  setUser: (value: React.SetStateAction<User>) => void;
  handleNavigation: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginComponent: FC<Props> = (props) => {
  const { user, setUser, handleNavigation } = props;

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="form"
          onSubmit={handleNavigation}
          sx={{
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "20px 50px",
            border: "1px solid lightgray",
            borderRadius: "20px",
            width: "400px",
            height: "550px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "150px",
            }}
          >
            <Box
              component="img"
              alt="Lemoncode logo"
              src="https://github.com/gustedeveloper/master-frontend-lemoncode/blob/main/Laboratorio%20M%C3%B3dulo%203%20-%20Bundling/webpack/src/content/logo_1.png?raw=true"
              sx={{ width: "150px" }}
            />
          </Box>

          <Typography variant="h2">Sign in</Typography>
          <Box>
            <FormLabel>Username</FormLabel>
            <OutlinedInput
              fullWidth
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              type="text"
              placeholder="Write your username"
              sx={{ marginTop: "10px", height: "40px" }}
            ></OutlinedInput>
          </Box>
          <Box>
            <FormLabel>Password</FormLabel>
            <OutlinedInput
              fullWidth
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="••••••"
              sx={{ marginTop: "10px", height: "40px" }}
            ></OutlinedInput>
          </Box>
          <Button type="submit" variant="contained" sx={{ marginTop: "10px" }}>
            Sign in
          </Button>
        </Box>
      </Container>
    </>
  );
};
