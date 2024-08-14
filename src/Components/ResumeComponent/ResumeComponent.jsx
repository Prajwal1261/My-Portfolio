import { Grid, Paper } from "@mui/material";
import React from "react";
import Resume from "../../assets/Prajwal_CV.pdf";

function ResumeComponent() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={10} md={8}>
        <Paper elevation={3} style={{ height: "80vh", marginTop: "3rem" }}>
          <embed
            src={Resume}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ResumeComponent;
