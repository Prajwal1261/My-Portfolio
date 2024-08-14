import { Grid, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import TimelineIcon from "@mui/icons-material/Timeline";
import KLE from "../../assets/kletech.jpeg";

function EducationComponent() {
  return (
    <Grid>
      <Typography
        style={{
          fontSize: "2rem",
          fontFamily: "Inter, Sans-serif",
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          color: "#f5f5f5",
          fontWeight: "bold",
        }}
      >
        My Education
      </Typography>
      <Grid
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Typography
          style={{
            fontSize: "1.5rem",
            maxWidth: "70rem",
            textAlign: "left",
            marginTop: "1rem",
            color: "#2c3e50",
            position: "relative", // For any future background effects
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <SchoolIcon style={{ marginRight: "0.5rem", color: "#2980b9" }} />{" "}
            <Typography style={{ color: "#f5f5f5", fontSize: "1.6rem" }}>
              B.E.,
            </Typography>
            <img
              src={KLE}
              alt="KLE Technological University"
              style={{
                marginLeft: "2rem",
                width: "45px",
                height: "auto",
                borderRadius: "5px",
              }}
            />
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "1.6rem",
                color: "#34495e",
                background: "linear-gradient(90deg, #f39c12, #f1c40f)", // Gradient background
                padding: "0.2rem 0.5rem",
                borderRadius: "5px",
              }}
            >
              KLE Technological University
            </span>
          </span>
          <span
            style={{
              marginTop: "0.6rem",
              display: "flex",
              alignItems: "center",
              fontSize: "1.24rem",
              color: "#f5f5f5",
            }}
          >
            <TimelineIcon style={{ marginRight: "0.5rem", color: "#27ae60" }} />
            Electronics and Communication Engineering - 2018 - 2022
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default EducationComponent;
