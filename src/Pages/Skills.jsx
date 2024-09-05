// src/components/Skills.js

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { skillsData } from "../CONSTANTS";

const useStyles = () => ({
  skillsContainer: {
    background: "linear-gradient(90deg, rgba(8,13,38,1) 21%, rgba(21,49,112,1) 47%, rgba(8,13,38,1) 80%)",
    paddingBottom: 20,
    paddingTop: 5,
  },
  titleContainer: {
    textAlign: "center",
    paddingTop: 11,
    maxWidth: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  skillsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: { lg: "row" },
    gap: { xs: 5, lg: 2 },
    maxWidth: { xs: "90%", lg: "80%" },
    paddingTop: { xs: "100px", lg: "50px" },
    margin: "0 auto",
  },
  skillBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    borderRadius: "15px",
    padding: "20px 30px 20px 30px",
    background: "#13234d",
    transition: "0.3s ease",
    marginBottom: "30px",
    maxWidth: "200px",
    "&:hover": {
      background: "#4d7ddb",
      transition: "0.3s ease",
      transform: "scale(1.05)",
    },
  },
  skillText: {
    fontSize: "20px",
    textAlign: "center",
  },
});

const Skills = () => {
  const classes = useStyles();

  return (
    <Box id="Skills" component="div" sx={classes.skillsContainer}>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          y: { duration: 0.5, delay: 0.1 },
        }}
      >
        <Box component="div" sx={classes.titleContainer}>
          <Typography sx={{ fontSize: "40px" }}>My Skills</Typography>
          <Typography sx={{ fontSize: "20px" }}>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</Typography>
        </Box>
      </motion.div>
      <Box component="div" sx={classes.skillsGrid}>
        {skillsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5, delay: 0.1 },
            }}
          >
            <Box sx={classes.skillBox}>
              <img src={item.logo} alt={item.name} width={100} height={100} />
              <Typography sx={classes.skillText}>{item.name}</Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
