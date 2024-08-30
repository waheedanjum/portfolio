import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Home, LinkedIn, Mail, WhatsApp } from "@mui/icons-material";
import { Call } from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <AppBar
      id="Contact"
      position="relative"
      sx={{
        top: "auto",
        bottom: 0,
        background:
          "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(21,49,112,1) 80%)",
        boxShadow: "none",
        px: 20,
        py: 5,
      }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", lg: "row" },
          gap: { xs: 5 },
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
            sx={{
              textAlign: "center",
            }}>
            <Typography component="div">
              <Typography variant="h6">Contact</Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  // alignItems: "center",
                  gap: 1,
                }}>
                <Call /> (+92) 300-4821983
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  gap: 1,
                }}>
                {" "}
                <Mail /> maliku400@gmail.com
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  gap: -1,
                }}>
                <Home /> 146-C Block Street #11, Al-Rehman Garden
                Phase-2,Lahore,Pakistan
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
          }}>
          <Box component="div">
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}>
              Usama Ijaz
            </Typography>
            <Typography
              component="div"
              sx={{ display: "flex", justifyContent: "center", gap: 3, pt: 2 }}>
              <Link
                href="https://wa.me/+923004821983"
                target="_blank"
                rel="noopener"
                underline="none">
                <WhatsApp />
              </Link>
              <Link
                href="tel:+923004821983"
                target="_blank"
                rel="noopener"
                underline="none">
                <Call />
              </Link>
              <Link
                href="https://www.linkedin.com/in/osama-ijaz-8b584b1b5"
                target="_blank"
                rel="noopener"
                underline="none">
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
