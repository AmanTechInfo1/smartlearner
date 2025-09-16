import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SellSubscription() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subscription, setSubscription] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const handleSearch = () => {
    // Mocked user detail response
    setUserDetails({
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    });
  };

  const handleSubscriptionChange = (event) => {
    setSubscription(event.target.value);
  };

  return (
    <div>
      {" "}
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: 500,
          margin: "auto",
          mt: 5,
        }}>
        {/* Heading */}
        <Typography variant="h5" textAlign="center">
          User Search & Subscription
        </Typography>

        {/* Input Field with Search Button */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            label="Search User"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            startIcon={<SearchIcon />}>
            Search
          </Button>
        </Box>

        {/* User Details Section */}
        {userDetails && (
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle1">User Details</Typography>
            <Typography>Name: {userDetails.name}</Typography>
            <Typography>Email: {userDetails.email}</Typography>
            <Typography>Age: {userDetails.age}</Typography>
          </Paper>
        )}

        {/* Select Subscription */}
        <FormControl fullWidth>
          <InputLabel>Select Subscription</InputLabel>
          <Select
            value={subscription}
            label="Select Subscription"
            onChange={handleSubscriptionChange}>
            <MenuItem value="free">Free</MenuItem>
            <MenuItem value="pro">Pro</MenuItem>
            <MenuItem value="enterprise">Enterprise</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
