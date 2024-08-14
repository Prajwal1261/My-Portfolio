import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ExperienceDialog from "./ExperienceDialog";
import { CardActions, Grid, useMediaQuery, useTheme } from "@mui/material";
import "./ExperienceComponent.css";

function ExperienceCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        height: "80vh",
        width: isMobile ? "90vw" : "33vw",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        backgroundColor: "#2c3e50",
        border: "1.5px solid #7f8c8d",
      }}
    >
      <CardMedia
        component="img"
        alt="Experience"
        height="140"
        image="/src/assets/exp.jpg"
        sx={{ borderBottom: "1.5px solid #7f8c8d" }}
      />
      <CardContent className="card-content">
        <div className="typography-style">
          <ul className="list-style">
            <li className="list-item-style">
              <span className="heading-style">Internship</span>
              <Typography style={{ fontSize: "1.2rem" }}>
                At Zeliot, I initially underwent a 6-month internship, which
                provided a solid foundation in software development, including
                core programming concepts and databases. This experience
                significantly enhanced my problem-solving skills and technical
                knowledge.
              </Typography>
            </li>
            <li className="list-item-style">
              <span className="heading-style">Current Employment</span>
              <Typography style={{ fontSize: "1.2rem" }}>
                As a full-stack developer at Zeliot, I have contributed to
                significant projects, developing and maintaining
                production-grade services. I have also focused on improving
                application performance and scalability.
              </Typography>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardActions>
        <ExperienceDialog />
      </CardActions>
    </Card>
  );
}

export default ExperienceCard;
