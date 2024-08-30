// GoToTopButton.js
import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fab
      color="primary"
      size="medium"
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: 60,
        right: 60,
        display: visible ? "block" : "none",
        padding: "10px",
      }}>
      <ArrowUpwardIcon />
    </Fab>
  );
};

export default GoToTopButton;
