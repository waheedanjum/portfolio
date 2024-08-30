import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Services = () => {
  const ServicesItems = [
    {
      name: "Reactjs",
      Description:
        "ReactJS development with Redux Toolkit and React Query. Crafting efficient state management, optimized data fetching, and seamless user experiences.",
      initialY: {
        x: -40,
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        ease: "linear",
        duration: 1,
        x: { duration: 0.5, delay: 0.1 },
      },
    },
    {
      name: "Nextjs",
      Description:
        "Next.js development, leveraging Redux Toolkit and React Query for efficient state management, optimized data fetching, and seamless user experiences.",
      initialY: {
        x: 40,
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        ease: "linear",
        duration: 1,
        x: { duration: 0.5, delay: 0.1 },
      },
    },

    {
      name: "Web3",
      Description:
        " Seamless Web3 integrations with Solidity, Web3.js, Ether.js, and WAGMI libraries for secure, efficient blockchain development and decentralized application deployments.",
      initialY: {
        y: 40,
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        ease: "linear",
        duration: 1,
        y: { duration: 0.5, delay: 0.1 },
      },
    },
  ];

  return (
    <>
      <Box
        id="Services"
        component="div"
        sx={{
          background: "black",
          paddingBottom: 15,
        }}>
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
              textAlign: "center",
              paddingTop: 11,
              maxWidth: "60%",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
            <Typography sx={{ fontSize: "40px" }}>
              My Quality Services
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Exceptional quality services in user-friendly interfaces, Web3
              integration, performance optimization, secure coding, and seamless
              deployment. Satisfaction guaranteed.
            </Typography>
          </Box>
        </motion.div>
        <Box component="div">
          {ServicesItems.map((item, index) => {
            return (
              <motion.div
                initial={item.initialY}
                whileInView={item.whileInView}
                transition={item.transition}>
                <Box
                  key={index}
                  component="div"
                  sx={{
                    display: "flex",
                    gap: { xs: 2, lg: 20 },
                    width: "80%",
                    flexDirection: { xs: "column", lg: "row" },
                    border: "1px solid blue",
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: 5,
                    marginTop: 5,
                    background:
                      "linear-gradient(103deg, rgba(23,69,173,1) 0%, rgba(0,0,0,1) 100%)", // Set your desired background color
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      width: "20%",
                    }}>
                    <Typography sx={{ fontSize: "20px" }}>
                      {"0" + (index + 1)}
                    </Typography>
                    <Typography sx={{ fontSize: "20px" }}>
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "15px", width: "80%" }}>
                    {item.Description}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Services;
