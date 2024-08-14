import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import "./ExperienceComponent.css";

function CardComponent() {
  return (
    <Grid container className="myCard">
      <ExperienceCard />
      <ProjectCard />
    </Grid>
  );
}

export default CardComponent;
