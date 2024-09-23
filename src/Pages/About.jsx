import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Education, Experience } from "../CONSTANTS";

const About = () => {
  // Split the experience items into pair
  const experiencePairs = [];
  for (let i = 0; i < Experience.length; i += 2) {
    experiencePairs.push(Experience.slice(i, i + 2));
  }

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
          textAlign: { xs: "center", lg: "left" },
          width: "80%",
          margin: "0 auto",
          paddingTop: "70px",
        }}
      >
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
            }}
          >
            My Experience
          </Typography>
        </motion.div>

        {/* Experience section */}
        {experiencePairs.map((pair, index) => (
          <Box
            key={index}
            component="div"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between",
              gap: "50px",
              marginBottom: "30px", // Add spacing between rows
            }}
          >
            {pair.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  y: { duration: 0.5, delay: 0.1 },
                }}
              >
                <Box
                  sx={{
                    textAlign: { xs: "center", lg: "left" },
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    borderRadius: "15px",
                    padding: "20px 30px 20px 30px",
                    background: "#13234d",
                    transition: " .3s ease",
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
        ))}

        {/* Education section */}
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
              paddingTop: "70px", // Spacing between sections
            }}
          >
            My Education
          </Typography>
        </motion.div>
        {Education.map((item, index) => (
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
            <Box
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
  );
};

export default About;
