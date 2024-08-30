import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image3.png";
import Image3 from "../assets/Image2.png";
import Image4 from "../assets/Image4.png";
import { ArrowOutward } from "@mui/icons-material";
import Link from "@mui/material/Link";

const RecentWork = () => {
  return (
    <>
      <Box
        id="Work"
        component="div"
        sx={{
          background:
            "linear-gradient(90deg, rgba(8,13,38,1) 21%, rgba(21,49,112,1) 47%, rgba(8,13,38,1) 80%)",
          paddingBottom: 15,
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
            <Typography sx={{ fontSize: "40px" }}>My Recent Works</Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Check out my recent works showcasing innovative ReactJS, Next.js,
              and Web3 integrations for cutting-edge web and blockchain
              applications.
            </Typography>
          </Box>
        </motion.div>

        <Box
          component="div"
          sx={{
            display: "flex",
            gap: { xs: "50px", lg: 0 },

            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "80%",
            paddingTop: { xs: "100px", lg: "50px" },
            margin: "0 auto",
          }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: "50px", lg: 0 },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}>
            <Box
              component="div"
              sx={{
                // background: `url(${Image1})`,
                // backgroundSize: "cover",
                paddingTop: { xs: 1, lg: 10 },
                width: { xs: "80%", md: "60%", lg: "45%" },
                height: { xs: "auto", lg: "450px" },
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  "& .child1": {
                    transition: "0.3s ease-in-out",
                    bottom: 0,
                  },
                },
              }}>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 0.5, delay: 0.1 },
                }}>
                <img
                  style={{ objectFit: "cover" }}
                  src={Image1}
                  alt="profilepicture"
                  width="100%"
                />
                <Box
                  component="div"
                  className="child1"
                  sx={{
                    position: "absolute",
                    bottom: { xs: 0, lg: "-50%" },
                    padding: { xs: "5px", lg: "20px" },
                    width: "100%",
                    background:
                      "linear-gradient(103deg, rgba(26,49,112,1) 33%, rgba(0,0,0,1) 73%)",
                    transition: "0.3s ease-in-out",
                  }}>
                  <Link
                    href="https://u369crypto.on.fleek.co/home"
                    target="_blank"
                    rel="noopener"
                    underline="none">
                    <Box
                      component="div"
                      sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography sx={{ fontSize: "20px" }}>
                        U369 Security Token
                      </Typography>
                      <ArrowOutward sx={{ fontSize: "30px" }} />
                    </Box>
                    <Typography sx={{ paddingTop: "15px" }}>
                      u369 smart contracts are immutable. The append-only
                      exception is to add new tokens.
                    </Typography>
                  </Link>
                </Box>
              </motion.div>
            </Box>

            <Box
              component="div"
              sx={{
                paddingTop: { xs: 1, lg: 10 },
                width: { xs: "80%", md: "60%", lg: "45%" },
                height: { xs: "auto", lg: "450px" },
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  "& .child2": {
                    transition: "0.3s ease-in-out",
                    bottom: 0,
                  },
                },
              }}>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 0.5, delay: 0.1 },
                }}>
                <img
                  style={{ objectFit: "cover" }}
                  src={Image2}
                  alt="profilepicture"
                  width="100%"
                />
                <Box
                  component="div"
                  className="child2"
                  sx={{
                    position: "absolute",
                    bottom: { xs: 0, lg: "-50%" },
                    padding: { xs: "5px", lg: "20px" },
                    width: "100%",
                    background:
                      "linear-gradient(103deg, rgba(26,49,112,1) 33%, rgba(0,0,0,1) 73%)",
                    transition: "0.3s ease-in-out",
                  }}>
                  <Link
                    href="https://du3m881cq6giu.cloudfront.net/"
                    target="_blank"
                    rel="noopener"
                    underline="none">
                    <Box
                      component="div"
                      sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography sx={{ fontSize: "20px" }}>
                        MadRex NFT Club
                      </Typography>
                      <ArrowOutward sx={{ fontSize: "30px" }} />
                    </Box>
                    <Typography sx={{ paddingTop: "15px" }}>
                      NFTs are generated using breeding methods using different
                      layers.
                    </Typography>
                  </Link>
                </Box>
              </motion.div>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: "50px", lg: 0 },

              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}>
            <Box
              component="div"
              sx={{
                paddingTop: { xs: 1, lg: 10 },
                width: { xs: "80%", md: "60%", lg: "45%" },

                height: { xs: "auto", lg: "450px" },
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  "& .child2": {
                    transition: "0.3s ease-in-out",
                    bottom: 0,
                  },
                },
              }}>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 0.5, delay: 0.1 },
                }}>
                <img
                  style={{ objectFit: "cover" }}
                  src={Image3}
                  alt="profilepicture"
                  width="100%"
                />
                <Box
                  component="div"
                  className="child2"
                  sx={{
                    position: "absolute",
                    bottom: { xs: 0, lg: "-50%" },
                    padding: { xs: "5px", lg: "20px" },
                    width: "100%",
                    background:
                      "linear-gradient(103deg, rgba(26,49,112,1) 33%, rgba(0,0,0,1) 73%)",
                    transition: "0.3s ease-in-out",
                  }}>
                  <Link
                    href="https://www.ikonshop.io/"
                    target="_blank"
                    rel="noopener"
                    underline="none">
                    <Box
                      component="div"
                      sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography sx={{ fontSize: "20px" }}>
                        IkonShop E-commerce
                      </Typography>
                      <ArrowOutward sx={{ fontSize: "30px" }} />
                    </Box>
                    <Typography sx={{ paddingTop: "15px" }}>
                      E-commerce marketplace for selling and purchasing of
                      products.
                    </Typography>
                  </Link>
                </Box>
              </motion.div>
            </Box>
            <Box
              component="div"
              sx={{
                paddingTop: { xs: 1, lg: 10 },
                width: { xs: "80%", md: "60%", lg: "45%" },

                height: { xs: "auto", lg: "450px" },
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  "& .child2": {
                    transition: "0.3s ease-in-out",
                    bottom: 0,
                  },
                },
              }}>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 0.5, delay: 0.1 },
                }}>
                <img
                  style={{ objectFit: "cover" }}
                  src={Image4}
                  alt="profilepicture"
                  width="100%"
                />
                <Box
                  component="div"
                  className="child2"
                  sx={{
                    position: "absolute",
                    bottom: { xs: 0, lg: "-50%" },
                    padding: { xs: "5px", lg: "20px" },
                    width: "100%",
                    background:
                      "linear-gradient(103deg, rgba(26,49,112,1) 33%, rgba(0,0,0,1) 73%)",
                    transition: "0.3s ease-in-out",
                  }}>
                  <Link
                    href="https://tevaera.com/"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                    style={{ padding: "10px" }}>
                    <Box
                      component="div"
                      sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography sx={{ fontSize: "20px" }}>
                        Tevera web3 Gaming
                      </Typography>
                      <ArrowOutward sx={{ fontSize: "30px" }} />
                    </Box>
                    <Typography sx={{ paddingTop: "15px" }}>
                      Web3 platform for gaming, Play and earn web3 Tokens as
                      rewards.
                    </Typography>
                  </Link>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RecentWork;
