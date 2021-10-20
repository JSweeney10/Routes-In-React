import React from "react";
import { Grid, TextField, Paper, Button } from "@material-ui/core";
const LoginPage = () => {
  const [setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField label="Username" type={"username"}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={"password"}></TextField>
          </Grid>
          <Grid item xs={12}>
            Login Above! Pricing; $19.99/day
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained">
              {" "}
              Login to the website that does nothing!!{" "}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
