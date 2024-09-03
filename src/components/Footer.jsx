import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Home, LinkedIn, Mail, WhatsApp } from "@mui/icons-material";
import { Call } from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "@mui/material/Link";
import { ADDRESS, EMAIL, LINKEDIN, NAME, PHONE_NUMBER } from "../CONSTANTS";

function Footer() {
  return (
    <AppBar
      id="Contact"
      position="relative"
      sx={{
        top: "auto",
        bottom: 0,
        background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(21,49,112,1) 80%)",
        boxShadow: "none",
        px: 20,
        py: 5,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", lg: "row" },
          gap: { xs: 5 },
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
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography component="div">
              <Typography variant="h6">Contact</Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  // alignItems: "center",
                  gap: 1,
                }}
              >
                <Call /> {PHONE_NUMBER}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  gap: 1,
                }}
              >
                {" "}
                <Mail /> {EMAIL}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  gap: -1,
                }}
              >
                <Home /> {ADDRESS}
              </Typography>
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 0.5, delay: 0.1 },
          }}
        >
          <Box component="div">
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              {NAME}
            </Typography>
            <Typography component="div" sx={{ display: "flex", justifyContent: "center", gap: 3, pt: 2 }}>
              <Link href={"https://wa.me/".concat(PHONE_NUMBER)} target="_blank" rel="noopener" underline="none">
                <WhatsApp />
              </Link>
              <Link href={"tel:".concat(PHONE_NUMBER)} target="_blank" rel="noopener" underline="none">
                <Call />
              </Link>
              <Link href={LINKEDIN} target="_blank" rel="noopener" underline="none">
                <LinkedIn />
              </Link>
            </Typography>
          </Box>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
