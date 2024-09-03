import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Education, Experience } from "../CONSTANTS";

const About = () => {
  return (
    <Box
      id="Experience"
      component="div"
      sx={{
        background: "black",
        paddingBottom: 10,
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          paddingTop: "70px",
          width: "80%",
          margin: "0 auto",
          gap: "50px",
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "100%" } }}>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5, delay: 0.1 },
            }}
          >
            <Typography
              sx={{
                fontSize: 50,
                paddingBottom: 5,

                textAlign: { xs: "center", lg: "left" },
              }}
            >
              My Experience
            </Typography>
          </motion.div>

          {Experience.map((item, index) => (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 1,
                y: { duration: 0.5, delay: 0.1 },
              }}
            >
              <Box
                key={index}
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  borderRadius: "15px",
                  padding: "20px 30px 20px 30px",
                  background: "#13234d",
                  transition: " .3s ease",
                  marginBottom: "30px",
                  "&:hover": {
                    background: "#4d7ddb",
                    transition: ".3s ease",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>{item.Date}</Typography>
                <Box component="div">
                  <Typography sx={{ fontSize: "18px" }}>{item.Position}</Typography>
                  <Typography sx={{ fontSize: "15px" }}>{item.Location}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          paddingTop: "70px",
          width: "80%",
          margin: "0 auto",
          gap: "50px",
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "100%" } }}>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5, delay: 0.1 },
            }}
          >
            <Typography
              sx={{
                fontSize: 50,
                paddingBottom: 5,

                textAlign: { xs: "center", lg: "left" },
              }}
            >
              My Education
            </Typography>
          </motion.div>
          {Education.map((item, index) => (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 1,
                y: { duration: 0.5, delay: 0.1 },
              }}
            >
              <Box
                key={index}
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  borderRadius: "15px",
                  padding: "20px 30px 20px 30px",
                  background: "#13234d",
                  transition: " .3s ease",
                  marginBottom: "30px",
                  "&:hover": {
                    background: "#4d7ddb",
                    transition: ".3s ease",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>{item.Date}</Typography>
                <Box component="div">
                  <Typography sx={{ fontSize: "18px" }}>{item.Position}</Typography>
                  <Typography sx={{ fontSize: "15px" }}>{item.Location}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
