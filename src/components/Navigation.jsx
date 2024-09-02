import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Link from "@mui/material/Link";

const drawerWidth = 240;
const navItems = ["Services", "Work", "Experience", "Skills", "Contact"];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Waheed Anjum
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  width: "100%",
                }}
              >
                <ListItemText primary={item} onClick={handleDrawerToggle} />
              </ScrollLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: "linear",
        duration: 2,
        y: { duration: 1, delay: 0.1 },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{
            background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(21,49,112,1) 80%)",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ padding: "20px 30px" }}>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "block", lg: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", lg: "start" },
                paddingLeft: { xs: "0", lg: 13 },
              }}
            >
              <Link href="mailto:me@waheedanjum.com" target="_blank" rel="noopener" underline="none" style={{ color: "white" }}>
                me@waheedanjum.com
              </Link>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", lg: "block" },
                pr: 20,
              }}
            >
              {navItems.map((item) => (
                <ScrollLink key={item} to={item} smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      color: "#fff",
                      mr: 1,
                      fontSize: 17,
                    }}
                  >
                    {item}
                  </Button>
                </ScrollLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", xl: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                bgcolor: "black",
                color: "white",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </motion.div>
  );
}

export default Navigation;
