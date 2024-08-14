import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import "./AboutComponent.css";
import SkillStack from "../SkillComponent/SkillStack";
import EducationComponent from "../Education Component/EducationComponent";

function AboutComponent() {
  return (
    <Grid>
      <Typography
        style={{
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          color: "#f5f5f5",
          fontWeight: "bold",
        }}
      >
        Hey, I am Prajwal
        <span className="wave">🖐️</span>
      </Typography>
      <Grid className="mainText">
        <Typography
          style={{
            fontSize: "1.5rem",
            maxWidth: "70rem",
            textAlign: "left",
            marginTop: "1rem",
            color: "#f5f5f5",
          }}
        >
          I’m a software engineer with a strong focus on problem-solving and
          effective teamwork. I specialize in full-stack development, handling
          both front-end and back-end technologies. I am experienced in
          leveraging modern tools and practices to enhance development
          efficiency. I approach every project with a commitment to innovation
          and excellence, ensuring I contribute both technically and
          collaboratively to drive impactful solutions.
        </Typography>
      </Grid>
      <Grid container className="links">
        <Grid item>
          <Link
            href="https://www.linkedin.com/in/prajwal-allitti"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://github.com/Prajwal1261"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </Link>
        </Grid>
        <Grid item>
          <Link href="mailto:allittiprajwal230@gmail.com">Email</Link>
        </Grid>
      </Grid>
      <Grid className="skill">
        <Typography
          style={{
            marginTop: "2rem",
            fontSize: "2rem",
            color: "#f5f5f5",
            fontWeight: "bold",
          }}
        >
          My Skills
        </Typography>
      </Grid>
      <Grid>
        <SkillStack />
      </Grid>
      <EducationComponent />
    </Grid>
  );
}

export default AboutComponent;
