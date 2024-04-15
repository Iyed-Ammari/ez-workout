import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";

const Navbar = ({setSiteAccessible}) => {
  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{
        gap: {
          sm: "70px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px={"20px"}
    >
      <Link to="/home">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack
        direction={"row"}
        gap={"40px"}
        fontSize={"24px"}
        alignItems={"flex-end"}
      >
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercises
        </a>

        {localStorage.getItem("userType") === "admin" ? (
          <>
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{ backgroundColor: "#FF2625" }}
            >
              <Link
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Dashboard
              </Link>
            </Button>
            <IconButton
              variant="contained"
              color="error"
              sx={{
                color: "white",
                backgroundColor: "#FF2625",
                width: "48px",
                height: "48px",
              }}
              onClick={() => {
                setSiteAccessible(false);
                navigate("/uc");
              }}
            >
              <ConstructionOutlinedIcon />
            </IconButton>
          </>
        ) : (
          ""
        )}
        <IconButton
          variant="contained"
          color="error"
          sx={{
            color: "white",
            backgroundColor: "#FF2625",
            width: "48px",
            height: "48px",
          }}
          onClick={() => {
            navigate("/");
          }}
        ><LogoutIcon /></IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
