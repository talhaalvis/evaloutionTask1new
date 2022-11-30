import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import img from "../Resources/Group 17534.png";
import img2 from "../Resources/Group_17868.png";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("offering");
  const dataSearch = useSelector((state) => state.product);
  const [terms, setTerms] = useState("");
  const [table, setTable] = useState("t1");
  const [color, setColor] = useState(true);
  const [colorS, setColorS] = useState(false);
  const [data, setData] = useState({ public: "public", page: 10 });
  const dispatch = useDispatch();
  const handleTab = (e) => {
    setCurrentTab(e);
    setTable("t1");
    setColor(true);
    dispatch(fetchProducts({ pageSize: data.page }));
    setColorS(false);
  };
  const handleTabS = (e) => {
    setCurrentTab(e);
    setTable("t2");
    setColorS(true);
    setColor(false);
    dispatch(
      fetchProducts({ sale: data.public, pageSize: data.page, pageNumber: 0 })
    );
  };
  const submitHandler = (e) => {
    if (e.key === "Enter" || terms === "") {
      if (table === "t1") {
        dispatch(fetchProducts({ symbol: terms, pageSize: 10, pageNumber: 0 }));
      } else {
        dispatch(
          fetchProducts({ sale: data.public, symbol: terms, pageSize: 10 })
        );
      }
    } else if ((e.key === "Enter" && table === "t2") || terms === "") {
    }
  };
  return (
    <div>
      <Header offering={currentTab} />
      <Container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            xl: "row",
            md: "row",
            lg: "row",
            sm: "row",
          },
          gap: { xs: 2 },
          mt: "20px",
        }}
      >
        <Button
          sx={{
            borderRadius: "5px",
            borderColor: "grey.500",
            width: { xs: "100%", lg: "100%" },
            color: "#111",
            fontWeight: "bold",
            fontSize: { md: "18px", lg: "22px" },
            border: "solid 1px rgba(177, 23, 5, 0.25)",
            fontFamily: "Metropolis",
            textTransform: "none",
          }}
          variant="outlined"
          onClick={(e) => handleTab("offering")}
          style={{
            backgroundImage: color
              ? " linear-gradient(98deg, #b11705 13%, #6a2961 101%)"
              : "",
            color: color ? "#fff" : "",
          }}
        >
          <img
            src={img}
            style={{ width: "40px", objectFit: "contain", marginRight: "5px" }}
            alt=""
          ></img>{" "}
          Fan token offering
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: { xs: "100%", lg: "100%" },
            marginLeft: { xs: "0" },
            color: "#111",
            fontWeight: "bold",
            fontSize: { md: "18px", lg: "22px" },
            fontFamily: "Metropolis",
            border: "solid 1px rgba(177, 23, 5, 0.25)",
            borderRadius: "5px",
            padding: { xs: "0" },
            textTransform: "none",
          }}
          onClick={(e) => handleTabS("simple")}
          style={{
            backgroundImage: colorS
              ? "linear-gradient(89deg, #5d2c72 2%, #b5142a 99%)"
              : "",
            color: colorS ? "#fff" : "",
          }}
        >
          <img
            src={img2}
            style={{
              width: "40px",
              objectFit: "contain",
              marginBottom: "7px",
              marginLeft: "4px",
            }}
            alt=""
          ></img>{" "}
          Fan tokens
        </Button>

        <TextField
          label="Search by coin.."
          type="text"
          sx={{
            width: { xs: "100%", md: "50%", lg: "70%" },
            marginLeft: { xs: "0", lg: "5px" },

            borderRadius: "5px",
          }}
          InputLabelProps={{
            style: { color: "rgba(177, 23, 5, 0.25)" },
          }}
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton sx={{ color: "rgba(177, 23, 5, 0.25)" }}>
                  {/* <SearchIcon /> */}
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onKeyUp={submitHandler}
          // onKeyDown={submitHandler}
        ></TextField>
      </Container>
    </div>
  );
};

export default Tabs;
