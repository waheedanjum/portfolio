import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Grid, Typography, Link } from "@mui/material";
import { motion } from "framer-motion";
import profile from "../assets/Picture.jpg"; // Not used in this code but imported
import Services from "./Services";
import RecentWork from "./RecentWork";
import About from "./About";
import Skills from "./Skills";
import GoToTopButton from "../components/TopButton";
import { DOWNLOAD_CV, GITHUB, LINKEDIN, NAME } from "../CONSTANTS";

// Separate styles object
const styles = {
  container: {
    marginTop: { xs: "90px", lg: 0 },
    marginBottom: { xs: "50px", lg: 0 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "column-reverse", lg: "row" },
    height: { xs: "100vh", sm: "auto", md: "auto", lg: "100vh" },
  },
  motionBox: {
    paddingLeft: { xs: 0, lg: 15 },
    paddingTop: { xs: 5, lg: 15 },
    paddingRight: { xs: 0, lg: 15 },
  },
  title: {
    display: { xs: "none", lg: "block" },
  },
  largeText: {
    fontSize: 50,
    marginBottom: -1,
  },
  description: {
    fontSize: 25,
    color: "grey",
    padding: "0 10px",
    textAlign: { xs: "center", lg: "left" },
  },
  logoFont: {
    display: "flex",
    justifyContent: { xs: "center", lg: "start" },
    alignItems: "center",
    gap: 3,
    paddingTop: 2,
  },
  button: {
    background: "transparent",
    fontSize: { xs: 30, lg: 33 },
    paddingLeft: 0,
    borderRadius: 1,
    padding: "5px 15px",
    transition: "0.3s ease",
    border: "0.5px solid #1644aa",
    "&:hover": {
      background: "#12295f",
      transition: "0.3s ease",
      transform: "scale(1.05)",
    },
  },
  icons: {
    display: "flex",
    gap: 1,
  },
  iconSize: {
    fontSize: { xs: 30, lg: 33 },
  },
};

const Home = () => {
  return (
    <Box component="div">
      <Grid sx={styles.container}>
        <Grid item xs={6}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5, delay: 0.1 },
            }}
          >
            <Box component="div" sx={styles.motionBox}>
              <Box sx={styles.title}>
                <Typography sx={{ fontSize: 40, marginBottom: -1 }}>{"I am ".concat(NAME)}</Typography>
                <Typography sx={styles.largeText}>Sr. Software Engineer +</Typography>
                <Typography sx={styles.largeText}>Full Stack and Mobile Developer</Typography>
              </Box>

              <Typography sx={styles.description}>
                {
                  "Senior Full Stack Developer with over 15 years of experience in software development, specializing in building robust web and mobile applications using C#, ASP.NET Core, React Native, NodeJS and JavaScript frameworks."
                }
              </Typography>
              <Box className="logoFont" component="div" sx={styles.logoFont}>
                <Link href={DOWNLOAD_CV} target="_blank" rel="noopener" underline="none">
                  <Button sx={styles.button}>Download CV</Button>
                </Link>

                <Box sx={styles.icons}>
                  <Link href={GITHUB} target="_blank" rel="noopener" underline="none">
                    <GitHub sx={styles.iconSize} />
                  </Link>
                  <Link href={LINKEDIN} target="_blank" rel="noopener" underline="none">
                    <LinkedIn sx={styles.iconSize} />
                  </Link>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
      <GoToTopButton />
      <Services />
      <RecentWork />
      <About />
      <Skills />
    </Box>
  );
};

export default Home;
