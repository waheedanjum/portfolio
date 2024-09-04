import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { motion } from "framer-motion";

import { ArrowOutward } from "@mui/icons-material";
import { Projects } from "../CONSTANTS";

const styles = {
  container: {
    background: "linear-gradient(90deg, rgba(8,13,38,1) 21%, rgba(21,49,112,1) 47%, rgba(8,13,38,1) 80%)",
    paddingBottom: 15,
  },
  headerContainer: {
    textAlign: "center",
    paddingTop: 11,
    maxWidth: "60%",
    margin: "0 auto",
  },
  headerTitle: {
    fontSize: "40px",
  },
  headerDescription: {
    fontSize: "20px",
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "80%",
    paddingTop: { xs: "100px", lg: "50px" },
    margin: "0 auto",
  },
  projectRow: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    gap: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "50px", // Adding some spacing between rows
  },
  projectItem: {
    paddingTop: { xs: 1, lg: 10 },
    width: { xs: "80%", md: "60%", lg: "45%" },
    height: { xs: "auto", lg: "450px" },
    overflow: "hidden",
    position: "relative",
    "&:hover": {
      "& .overlay": {
        transition: "0.3s ease-in-out",
        bottom: 0,
      },
    },
  },
  overlay: {
    position: "absolute",
    bottom: { xs: 0, lg: "-50%" },
    padding: { xs: "5px", lg: "20px" },
    width: "100%",
    background: "linear-gradient(103deg, rgba(26,49,112,1) 33%, rgba(0,0,0,1) 73%)",
    transition: "0.3s ease-in-out",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkTitle: {
    fontSize: "20px",
  },
  linkDescription: {
    paddingTop: "15px",
  },
};

const RecentWork = () => {
  // Split the projects array into pairs
  const projectPairs = [];
  for (let i = 0; i < Projects.length; i += 2) {
    projectPairs.push(Projects.slice(i, i + 2));
  }

  return (
    <Box id="Work" component="div" sx={styles.container}>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          y: { duration: 0.5, delay: 0.1 },
        }}
      >
        <Box component="div" sx={styles.headerContainer}>
          <Typography sx={styles.headerTitle}>My Recent Works</Typography>
          <Typography sx={styles.headerDescription}>
            Showcasing a collection of innovative projects that highlight my expertise in web and mobile development. From dynamic web applications to cross-platform mobile
            solutions, each project demonstrates a commitment to quality, performance, and user experience.
          </Typography>
        </Box>
      </motion.div>

      <Box component="div" sx={styles.projectsContainer}>
        {projectPairs.map((pair, index) => (
          <Box key={index} component="div" sx={styles.projectRow}>
            {pair.map((project, idx) => (
              <Box key={idx} component="div" sx={styles.projectItem}>
                <motion.div
                  initial={{ x: index % 2 === 0 ? -40 : 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                    x: { duration: 0.5, delay: 0.1 },
                  }}
                >
                  <img style={{ objectFit: "cover" }} src={project.image} alt={project.title} width="100%" />
                  <Box component="div" className="overlay" sx={styles.overlay}>
                    <Link href={project.link} target="_blank" rel="noopener" underline="none">
                      <Box component="div" sx={styles.linkContainer}>
                        <Typography sx={styles.linkTitle}>{project.title}</Typography>
                        <ArrowOutward sx={{ fontSize: "30px" }} />
                      </Box>
                      <Typography sx={styles.linkDescription}>{project.description}</Typography>
                    </Link>
                  </Box>
                </motion.div>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentWork;
