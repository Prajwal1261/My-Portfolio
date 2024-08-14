import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProjectDialog from "./ProjectDialog";
import { useMediaQuery, useTheme } from "@mui/material";
import "./ExperienceComponent.css";
import ProjectImg from "../../assets/pro1.jpg";

function ProjectCard() {
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
        alt="green iguana"
        height="140"
        image={ProjectImg}
        sx={{ borderBottom: "1.5px solid #7f8c8d" }}
      />
      <CardContent className="card-content">
        <div className="typography-style">
          <ul className="list-style">
            <li className="list-item-style">
              <span className="heading-style">
                Fleet Manangement System (TrakZeus Portal)
              </span>
              <Typography style={{ fontSize: "1.2rem" }}>
                Designed and developed a comprehensive Fleet Management Portal
                with key features like driver analytics, load detection and
                reporting functionalities. Implemented and optimized these
                features to boost efficiency.
              </Typography>
            </li>
            <li className="list-item-style">
              <span className="heading-style">
                Fleet Management (VECV School Solutions)
              </span>
              <Typography style={{ fontSize: "1.2rem" }}>
                Developed a Fleet Management System for VECV School Solutions,
                incorporating comprehensive CRUD operations for managing school
                and student data. Implemented GraphQL APIs to facilitate
                efficient data interactions and enhanced flexibility in managing
                school and student information.
              </Typography>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardActions>
        <ProjectDialog />
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
