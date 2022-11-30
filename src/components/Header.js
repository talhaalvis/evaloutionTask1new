import { Stack, Box } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import img from "../Resources/medal.png";
import img2 from "../Resources/unknown.png";
import img3 from "../Resources/dots.png";
import { Typography } from "@mui/material";
const Header = ({offering,simple}) => {
  return (
    <Box className='img'
      sx={{
        maxWidth: "100vw",
        height:{xs:'300px',lg:'450px'}
      }}
    >
      
      <Navbar />
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: { xs: "3rem", lg: "5rem" },
        }}
      >
        <img
          style={{ width: { xs: "60px", lg: "105px" }, height: "105px" }}
          src={img}
          alt=""
        ></img>

        {offering === "simple" && <Typography sx={{fontSize:{xs:'25px',lg:'55px'},color: '#b11705',fontWeight: 'normal'}}>VIP FAN TOKEN</Typography>
        }

        {offering==='offering' && <Typography
          variant="h5"
          sx={{
            fontWeight: "normal",
            lineHeight: 1.9,
            fontSize: { xs: "15px", lg: "30px" },
            mb: { xs: "30px", },
            mt:{xs:'20px'},
            fontFamily: "Metropolis",
            paddingLeft: { xs: "20px" },
          }}
        >
          A token launch platform for transformative projects.
        </Typography>}


{/* vip fan */}
       { offering==='simple'&& <Typography
          variant="h5"
          sx={{
            fontWeight: "normal",
            lineHeight: 1.9,
            fontSize: { xs: "15px", lg: "30px" },
            mt: "0px",
            mb: { xs: "30px",  },

            fontFamily: "Metropolis",
            paddingLeft: { xs: "20px" },
          }}
        >
          A token launch platform for transformative projects.
        </Typography>}
       
      </Stack>
    </Box>
  );
};

export default Header;
