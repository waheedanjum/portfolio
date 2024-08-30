import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ReactLogo from "../assets/react.svg";
import JavascriptLogo from "../assets/js.svg";
import MaterialLogo from "../assets/Material.svg";
import TailwindLogo from "../assets/Tailwind.svg";
import EtherLogo from "../assets/ether.svg";
import NextjsLogo from "../assets/nextjs.svg";
import Web3Logo from "../assets/web3.svg";

const Skills = () => {
  const Skills = [
    {
      logo: JavascriptLogo,
      name: "JavaScript",
      percentage: "80%",
    },
    {
      logo: ReactLogo,
      name: "React",
      percentage: "90%",
    },
    {
      logo: NextjsLogo,
      name: "Nextjs",
      percentage: "80%",
    },

    {
      logo: Web3Logo,
      name: "Web3",
      percentage: "80%",
    },
    {
      logo: MaterialLogo,
      name: "Material",
      percentage: "80%",
    },
    {
      logo: TailwindLogo,
      name: "Tailwind",
      percentage: "80%",
    },
    {
      logo: EtherLogo,
      name: "Solidity",
      percentage: "70%",
    },
  ];

  return (
    <Box
      id="Skills"
      component="div"
      sx={{
        background:
          "linear-gradient(90deg, rgba(8,13,38,1) 21%, rgba(21,49,112,1) 47%, rgba(8,13,38,1) 80%)",
        paddingBottom: 20,
        paddingTop: 5,
      }}>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
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
          <Typography sx={{ fontSize: "40px" }}>My Skills</Typography>
          <Typography sx={{ fontSize: "20px" }}>
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </Typography>
        </Box>
      </motion.div>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 5, lg: 2 },
          maxWidth: { xs: "50%", lg: "80%" },
          paddingTop: { xs: "100px", lg: "50px" },
          margin: "0 auto",
        }}>
        {Skills.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5, delay: 0.1 },
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
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
              }}>
              <img src={item.logo} alt="react" width={100} height={100} />

              <Typography
                sx={{
                  fontSize: "20px",
                }}>
                {item.name}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
