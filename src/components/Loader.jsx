import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { Box } from "@mui/material";

const Loader = ({ loading }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <MoonLoader color={"#FF2625"} loading={loading} size={150} />
    </Box>
  );
};

export default Loader;
