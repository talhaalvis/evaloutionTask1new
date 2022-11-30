import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import img from "../Resources/v2flogo.png";
import { styled } from "@mui/system";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
const Item = styled("div")(({ theme }) => ({
  cursor: "pointer",
  alignItems: "center",
}));
const Navbar = () => {
  return (
    <Box
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: { xl: "6%", lg: "5", md: "3%", sm: "2%", xs: "1%" },
        paddingTop: "3px",
      }}
    >
      <Box sx={{ maxWidth: { xs: "100px", lg: "150px", marginLeft: "10px" } }}>
        <img style={{ maxWidth: "100%", height: "auto" }} src={img} alt="" />
      </Box>
      <Stack
        style={{
          display: "flex",
          alignItems: "center",
        }}
        direction="row"
        spacing={{ xl: 5, lg: 4, md: 3, sm: 2, xs: 1 }}
      >
        <Item
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            display: {
              xl: "inline-block",
              lg: "inline-block",
              md: "inline-block",
              sm: "none",
              xs: "none",
            },
            fontFamily: "Metropolis",
          }}
        >
          HOME
        </Item>
        <Item
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            display: {
              xl: "inline-block",
              lg: "inline-block",
              md: "inline-block",
              sm: "none",
              xs: "none",
            },
            fontFamily: "Metropolis",
          }}
        >
          ANNOUNCMENTS
        </Item>
        <Item
          sx={{
            color: "#b11705",
            fontWeight: "bold",
            display: {
              xl: "inline-block",
              lg: "inline-block",
              md: "inline-block",
              sm: "none",
              xs: "none",
            },
            fontFamily: "Metropolis",
          }}
        >
          VIP FAN TOKEN
        </Item>
        <Item
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            display: {
              xl: "inline-block",
              lg: "inline-block",
              md: "inline-block",
              sm: "none",
              xs: "none",
            },
            fontFamily: "Metropolis",
          }}
        >
          HELP
        </Item>

        <SearchOutlinedIcon
          sx={{
            cursor: "pointer",
            color: "#b11705",

            display: {
              xl: "inline-block",
              lg: "inline-block",
              md: "inline-block",
              sm: "inline-block",
              xs: "none",
            },
            fontFamily: "Metropolis",
          }}
        />
        <Item
          sx={{
            color: "#b11705",
            fontWeight: "bold",
            fontFamily: "Metropolis",
          }}
        >
          Sign in
        </Item>
        <Item>
          <Button
            sx={{
              paddingBlock: {
                xl: "12px",
                lg: "12px",
                md: "5px",
                sm: "5px",
                xs: "10px",
              },
              paddingInline: {
                xl: "12px",
                lg: "12px",
                md: "8px",
                sm: "7px",
                xs: "7px",
              },
              background: "linear-gradient(115deg, #662a74 6%, #802255 95%)",
              color: "#fff",
              fontSize: { md: "17px", sm: "9px", xs: "10px" },
              fontFamily: "Metropolis",
              marginRight: { xs: "10px" },
              textTransform:'none'
            }}
          >
            Get Started
          </Button>
        </Item>
      </Stack>
    </Box>
  );
};

export default Navbar;
