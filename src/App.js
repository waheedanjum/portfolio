import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./Pages/Home";
import { Box } from "@mui/material";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1 seconds

    // Cleanup the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <main>
          <Navigation />
          <Box component="main">
            <Home />
          </Box>
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;
