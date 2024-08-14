import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ReactImage from "../../assets/react.svg";
import NodeImg from "../../assets/node.svg";
import Kafka from "../../assets/kafka.svg";
import JS from "../../assets/js.svg";
import GraphQl from "../../assets/graphql.svg";
import Sequelize from "../../assets/sequelize.svg";
import SQL from "../../assets/sql.svg";
import Git from "../../assets/git.svg";
import CSS from "../../assets/css.svg";

import "./SkillComponent.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#2c3e50",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#f5f5f5",
  fontSize: "1.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1 1 15%", // Make each item take 15% of the row width
  margin: "0.5rem",
  border: "1.5px solid #7f8c8d",
}));

const skillData = [
  { skill: "Node.js", imgSrc: NodeImg, imgAlt: "Node.js", imgWidth: "40px" },
  {
    skill: "React.js",
    imgSrc: ReactImage,
    imgAlt: "React.js",
    imgWidth: "40px",
  },
  {
    skill: "JavaScript",
    imgSrc: JS,
    imgAlt: "JavaScript",
    imgWidth: "40px",
  },
  { skill: "CSS", imgSrc: CSS, imgAlt: "CSS", imgWidth: "40px" },
  { skill: "GraphQL", imgSrc: GraphQl, imgAlt: "GraphQL", imgWidth: "40px" },
  {
    skill: "Sequelize",
    imgSrc: Sequelize,
    imgAlt: "Sequelize",
    imgWidth: "40px",
  },
  { skill: "Kafka", imgSrc: Kafka, imgAlt: "Kafka", imgWidth: "40px" },
  { skill: "SQL", imgSrc: SQL, imgAlt: "SQL", imgWidth: "40px" },
  { skill: "Git", imgSrc: Git, imgAlt: "Git", imgWidth: "40px" },
];

function SkillStack() {
  return (
    <Grid className="skill-stack">
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ maxWidth: "70rem" }}
      >
        {skillData.map(({ skill, imgSrc, imgAlt, imgWidth }) => (
          <Item key={skill}>
            {imgSrc && (
              <img
                src={imgSrc}
                alt={imgAlt}
                width={imgWidth}
                style={{ marginRight: "8px" }}
              />
            )}
            {skill}
          </Item>
        ))}
      </Stack>
    </Grid>
  );
}

export default SkillStack;
