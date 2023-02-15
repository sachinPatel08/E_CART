import React, { useState } from "react";
import { db } from "../firebase";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, query, where, addDoc } from "firebase/firestore";

function Register() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const [check, setCheck] = useState(false);
  const data = async (db) => {
  //   const q = query(collection(db, "register"), where("userName", "==" , userData.userName));

  //   const querySnapshot = await getDocs(q);
  //   console.log("hiii",querySnapshot.doc.data())
  //  if( querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // })){
    
  // }
  if (check) {
    try {
      
      const docRef = await addDoc(collection(db, "register"), {
        email: userData.email,
        password: userData.password,
        userName: userData.userName,
      });
      toast(docRef.id,"you are sucessfully registred..");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    console.log("please select the term and condition..");
  }
    
  };

  const handleSubmit = (e) => {

    data(db);
  };
  const theme = createTheme();

  // data(db)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="/broken-image.jpg"
              sx={{ m: 1, bgcolor: "secondary.main" }}
            ></Avatar>
            <Typography component="h1" variant="h6">
              Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="username"
                name="userName"
                autoComplete="username"
                autoFocus
                onChange={(e) =>
                  setUserData({ ...userData, userName: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value={check}
                    onChange={(e) => setCheck(!check)}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Register;

