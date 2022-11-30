import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/system";
import { Button, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import img from "../Resources/Group_17937.png";
import { makeStyles, withStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 4,
  },

  table: {
    minWidth: 700,
  },

  loaderWrapper: ({ height }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: height,
  }),
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const CoinTable = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles(props);
  const { data: product, status } = useSelector((state) => state.product);
  console.log(status);

  useEffect(() => {
    dispatch(fetchProducts({ pageSize: 10 }));
  }, []);
  const handleSort = (sortValue, sort) => {
    dispatch(fetchProducts({ sortValue, sort, pageSize: 10 }));
  };
  // function
  return (
    <Container sx={{ marginTop: "10px", marginBottom: "20px" }}>
      <Stack
        spacing={5}
        direction={{
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          // xs: "column",
        }}
      >
        <Box
          className="border"
          sx={{
            overflowX: "visible",
            marginTop: "10px",
            width: "100%",
          }}
        >
          <TableContainer
            sx={{ border: "solid 1px rgba(205, 205, 205, 0.28)" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>

            <Table
              className="stb"
              sx={{
                minWidth: 400,
              }}
              aria-label="customized table"
            >
              <TableHead
                sx={{
                  background: "linear-gradient(89deg, #5d2c72 2%, #b5142a 99%)",
                }}
              >
                <TableRow>
                  <StyledTableCell
                    style={{
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottom: "none",
                      textAlign: { xs: "center" },
                      fontFamily: "Metropolis",
                    }}
                    sx={{
                      maxWidth: { xs: "71px", lg: "108px" },
                      minWidth: { xs: "120px" },
                    }}
                    width="15%"
                  >
                    Fan Name
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <ExpandLessIcon
                        onClick={(e) => handleSort("ASC", "userName")}
                        sx={{ width: "20px", cursor: "pointer" }}
                      />
                      <ExpandMoreIcon
                        onClick={(e) => handleSort("DSC", "userName")}
                        sx={{ marginTop: "-16px", width: "20px" }}
                      />
                    </Box>
                  </StyledTableCell>

                  <StyledTableCell
                    style={{
                      color: "#fff",
                      position: "relative",
                      fontFamily: "Metropolis",
                      maxWidith: "74px",
                      // display:'flex'
                      borderBottom: "none",
                    }}
                    sx={{ minWidth: "89px" }}
                    width="12.5%"
                  >
                    Fan Token
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        top: { xs: "16px", md: "17px", lg: "16px" },
                        right: { xs: "3px", md: "3px", lg: "25px" },
                      }}
                    >
                      <ExpandLessIcon
                        onClick={(e) => handleSort("ASC", "coinName")}
                        sx={{ width: "20px", marginBottom: "-8px" }}
                      />
                      <ExpandMoreIcon
                        onClick={(e) => handleSort("DSC", "coinName")}
                        sx={{ marginTop: "-8px", width: "20px" }}
                      />
                    </Box>
                  </StyledTableCell>

                  <StyledTableCell
                    align="right"
                    sx={{
                      color: "#fff",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottom: "none",
                      textAlign: { xs: "center" },
                      fontFamily: "Metropolis",
                      minWidth: { xs: "126px" },
                    }}
                    width="12.5%"
                  >
                    Launch Price
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <ExpandLessIcon
                        onClick={(e) => handleSort("ASC", "launchPrice")}
                        sx={{ width: "20px" }}
                      />
                      <ExpandMoreIcon
                        onClick={(e) => handleSort("DSC", "launchPrice")}
                        sx={{ marginTop: "-16px", width: "20px" }}
                      />
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{
                      color: "#fff",
                      textAlign: { xs: "center" },
                      fontFamily: "Metropolis",
                    }}
                    sx={{
                      minWidth: { xs: "125px", lg: "110px" },
                      borderBottom: "none",
                    }}
                    width="12.5%"
                  >
                    Pre-Sale Price
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{ color: "#fff", fontFamily: "Metropolis" }}
                    sx={{
                      minWidth: { xs: "150px", lg: "126px" },
                      borderBottom: "none",
                    }}
                    width="12.5%"
                  >
                    Pre-Sale Supply
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{ color: "#fff", fontFamily: "Metropolis" }}
                    sx={{
                      minWidth: { xs: "103px", lg: "88px" },
                      borderBottom: "none",
                    }}
                    width="12.5%"
                  >
                    Total Supply
                  </StyledTableCell>
                  <StyledTableCell
                    style={{
                      color: "#fff",
                      fontFamily: "Metropolis",
                      borderBottom: "none",
                    }}
                    align="right"
                    width="11%"
                  >
                    24hr
                  </StyledTableCell>
                  <StyledTableCell
                    style={{
                      color: "#fff",
                      fontFamily: "Metropolis",
                      borderBottom: "none",
                    }}
                    align="right"
                    width="11.5%"
                  >
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              {status === "loading" ? (
                <StyledTableRow>
                  <StyledTableCell colSpan={9}>
                    <Box height={400} className={classes.loaderWrapper} sx={{margin:'37vw'}}>
                      <CircularProgress sx={{ color: "#b11705" }} />
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ) : (
                <>
                  {" "}
                  <TableBody>
                    {product.data?.map((row) => {
                      return (
                        <StyledTableRow sx={{ textAlign: "center" }}>
                          <StyledTableCell component="td" scope="row">
                            <Box
                              sx={{
                                display: "flex",
                                alighnItems: "center",
                                gap: "4%",
                                maxWidth: "102px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifySelf: "flex-start",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                  }}
                                  src={row.imageURL}
                                  alt=""
                                />
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  alighnItems: "center",
                                  // textAlign:"center",
                                  marginTop: "6%",
                                }}
                              >
                                {row.buyStatus.coin}
                              </Box>
                            </Box>
                          </StyledTableCell>
                          <StyledTableCell
                            align="center"
                            sx={{ minWidth: { xs: "80px" } }}
                          >
                            {row.celebrity.coinName}
                          </StyledTableCell>
                          <StyledTableCell
                            align="center"
                            sx={{ minWidth: { xs: "80px" } }}
                          >
                            ${row.usdPrice}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            ${row.stageData.usdPrice}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.stageData.supply}
                          </StyledTableCell>
                          <StyledTableCell sx={{}} align="center">
                            {row.totalSupply}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <img
                              src={img}
                              alt=""
                              style={{ textAlign: "center", width: "52.6px" }}
                            ></img>{" "}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <Button
                              variant="outlined"
                              sx={{
                                color: "red",
                                width: "41px",
                                fontsize: "22px",
                                fontWeight: 500,
                                borderRadius: "12px",
                                border: "solid 1px #b11705",
                              }}
                              disabled={!row.buyStatus.buy}
                            >
                              Buy
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </>
              )}

              {product.data?.length === 0 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                   
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      fontSize: "17px",
                      color: "#b11705",
                      fontFamily: "Metropolis",
                    }}
                  >
                    {" "}
                    No Record Found
                  </h1>
                </Box>
              )}
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Container>
  );
};

export default CoinTable;
