import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert
} from "@mui/material";
import ApiService from '../../../../ApiService';

const api = new ApiService('https://digigoldbook.com/api'); // Define the base API URL

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
      return;
    }

    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await api.post('/auth/sign-in', { email, password });
      console.log("Response: ", response);
      setSuccessMessage("Login successful!");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box 
        component="form"
        onSubmit={handleSubmit}
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          boxShadow: 3,
          padding: 3,
          borderRadius: 2
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign In
        </Typography>

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />

        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default SignInPage;
