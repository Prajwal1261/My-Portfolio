import { Grid } from "@mui/material";
import React from "react";

const skillData = [
  "Node js",
  "React js",
  "JavaScript",
  "GraphQL",
  "Sequelize",
  "Kafka",
  "SQL",
  "Git",
];

function BasicSkill() {
  return (
    <Grid>
      <ul
        style={{
          fontSize: "30px",
          display: "flex",
          gap: 40,
          fontStyle: "italic",
        }}
      >
        {skillData.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Grid>
  );
}

export default BasicSkill;
