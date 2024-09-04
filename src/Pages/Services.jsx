import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ServicesItems } from "../CONSTANTS";

// Separate styles object
const styles = {
  container: {
    background: "black",
    paddingBottom: 15,
  },
  motionContainer: {
    textAlign: "center",
    paddingTop: 11,
    maxWidth: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontSize: "40px",
  },
  description: {
    fontSize: "20px",
  },
  serviceItemContainer: {
    display: "flex",
    gap: { xs: 2, lg: 20 },
    width: "80%",
    flexDirection: { xs: "column", lg: "row" },
    border: "1px solid blue",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 5,
    marginTop: 5,
    background: "linear-gradient(103deg, rgba(23,69,173,1) 0%, rgba(0,0,0,1) 100%)",
  },
  serviceItemLeft: {
    display: "flex",
    gap: 2,
    width: "20%",
  },
  serviceItemNumber: {
    fontSize: "20px",
  },
  serviceItemName: {
    fontSize: "20px",
  },
  serviceItemDescription: {
    fontSize: "15px",
    width: "80%",
  },
};

const Services = () => {
  return (
    <Box id="Services" component="div" sx={styles.container}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
          y: { duration: 0.5, delay: 0.1 },
        }}
      >
        <Box component="div" sx={styles.motionContainer}>
          <Typography sx={styles.title}>My Quality Services</Typography>
          <Typography sx={styles.description}>
            Expert in crafting dynamic web applications using React, Angular, and .NET, with robust backend services in Node.js. Skilled in delivering high-performance,
            cross-platform mobile apps with React Native for seamless user experiences.
          </Typography>
        </Box>
      </motion.div>

      <Box component="div">
        {ServicesItems.map((item, index) => (
          <motion.div key={index} initial={item.initialY} whileInView={item.whileInView} transition={item.transition}>
            <Box component="div" sx={styles.serviceItemContainer}>
              <Box sx={styles.serviceItemLeft}>
                <Typography sx={styles.serviceItemNumber}>{"0" + (index + 1)}</Typography>
                <Typography sx={styles.serviceItemName}>{item.name}</Typography>
              </Box>
              <Typography sx={styles.serviceItemDescription}>{item.Description}</Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
