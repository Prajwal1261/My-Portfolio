import { Grid } from "@mui/material";
import React from "react";
import ExperienceComponent from "../Experience Component/ExperienceComponent";
import AboutComponent from "../AboutComponent/AboutComponent";
import ResumeComponent from "../ResumeComponent/ResumeComponent";

function BodyContainer(props) {
  return (
    <Grid>
      {props.selectedMenu == 0 ? (
        <Grid>
          <AboutComponent />
        </Grid>
      ) : null}
      {props.selectedMenu == 1 ? (
        <ExperienceComponent />
      ) : props.selectedMenu == 2 ? (
        <Grid>
          <ResumeComponent />
        </Grid>
      ) : null}
    </Grid>
  );
}

export default BodyContainer;
