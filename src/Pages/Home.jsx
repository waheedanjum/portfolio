import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import profile from "../assets/Picture.jpg";
import { motion } from "framer-motion";
import Services from "./Services";
import RecentWork from "./RecentWork";
import About from "./About";
import Skills from "./Skills";
import GoToTopButton from "../components/TopButton";
import Link from "@mui/material/Link";

const Home = () => {
  return (
    <Box component="div">
      <Grid
        sx={{
          marginTop: { xs: "90px", lg: 0 },
          marginBottom: { xs: "50px", lg: 0 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", lg: "row" },
          height: { xs: "100vh", sm: "auto", md: "auto", lg: "100vh" },
        }}>
        <Grid item xs={6}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5, delay: 0.1 },
            }}>
            <Box
              component="div"
              sx={{
                paddingLeft: { xs: 0, lg: 15 },
                paddingTop: { xs: 5, lg: 15 },
                paddingRight: { xs: 0, lg: 15 },
              }}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Typography
                  sx={{
                    fontSize: 40,
                    marginBottom: -1,
                  }}>
                  I am Usama
                </Typography>
                <Typography sx={{ fontSize: 50, marginBottom: -1 }}>
                  Software Engineer +
                </Typography>
                <Typography sx={{ fontSize: 50 }}>
                  Reactjs & Web3 Engineer
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: 25,
                  color: "grey",
                  padding: " 0 10px",
                  textAlign: { xs: "center", lg: "left" },
                }}>
                Creative ReactJS engineer skilled in creating dynamic user
                interfaces with a solid grasp of Web3 technologies.
              </Typography>
              <Box
                className="logoFont"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "start" },
                  alignItems: "center",
                  gap: 3,
                  paddingTop: 2,
                }}>
                <Link
                  href="https://drive.google.com/file/d/1aQGFm-anOsrhi0rn-ePQAf0sUyEQ4tBw/view?usp=drive_link"
                  target="_blank"
                  rel="noopener"
                  underline="none">
                  <Button
                    sx={{
                      background: "transparent",
                      fontSize: { xs: 30, lg: 33 },
                      paddingLeft: 0,
                      borderRadius: 1,
                      padding: "5px 15px",
                      transition: " .3s ease",

                      border: "0.5px solid #1644aa",
                      "&:hover": {
                        background: "#12295f",
                        transition: ".3s ease",
                        transform: "scale(1.05)",
                      },
                    }}>
                    Download CV
                  </Button>
                </Link>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Link
                    href="https://github.com/UsamaMalik444"
                    target="_blank"
                    rel="noopener"
                    underline="none">
                    <GitHub sx={{ fontSize: { xs: 30, lg: 33 } }} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/osama-ijaz-8b584b1b5"
                    target="_blank"
                    rel="noopener"
                    underline="none">
                    <LinkedIn sx={{ fontSize: { xs: 30, lg: 35 } }} />
                  </Link>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={6}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5, delay: 0.1 },
            }}>
            <Box
              component="div"
              sx={{
                paddingTop: { xs: 0, md: 10, lg: 0 },
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}>
              <Box
                sx={{
                  display: {
                    xs: "block",
                    lg: "none",
                    textAlign: "center",
                  },
                }}>
                <Typography sx={{ fontSize: 20 }}>I am Usama</Typography>
                <Typography sx={{ fontSize: 30 }}>
                  Software Engineer +
                </Typography>
                <Typography sx={{ fontSize: 30 }}>
                  Reactjs & Web3 Engineer
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  paddingTop: { xs: 1, lg: 10 },
                  paddingRight: { xs: 0, lg: 20 },
                  width: { xs: "73%", sm: "50%", md: "50%", lg: "100%" },
                  height: { xs: "50%", lg: "100%" },
                  overflow: "hidden",
                }}>
                <img
                  src={profile}
                  alt="profilepicture"
                  width="100%"
                  height="100%"
                />
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
