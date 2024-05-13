import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../addressCard/AddressCard";

const DeliveryAddressForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            address:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            number:data.get("phoneNumber"),
            zipcode:data.get("zip"),
        }
        console.log("Details",address);
    }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className=" border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "#662D92" }}
              size="large"
              variant="contained"
            >
              Delivery Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="firstname"
                    id="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="lastname"
                    id="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="address"
                    id="address"
                    label="Address"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="city"
                    id="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="state"
                    id="state"
                    label="State"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="zip"
                    id="zip"
                    label="Zip/Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="phoneNumber"
                    id="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ py:1.5, mt: 2, bgcolor: "#662D92" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Delivery Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
