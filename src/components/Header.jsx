import React from "react";
import { Typography, Box } from "@mui/joy";

function Header() {
  return (
    <div className="header">
      <Box
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom="40px"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          viewBox="0 0 36 36"
          style={{
            marginRight: "8px",
            marginTop: "10px",
            verticalAlign: "middle",
          }}
        >
          <path
            fill="#0B6BCB"
            d="M31.43 16H10v2h21.43a1 1 0 0 0 0-2"
            className="clr-i-outline clr-i-outline-path-1"
          ></path>
          <path
            fill="#0B6BCB"
            d="M31.43 24H10v2h21.43a1 1 0 0 0 0-2"
            className="clr-i-outline clr-i-outline-path-2"
          ></path>
          <path
            fill="#0B6BCB"
            d="M15.45 10h16a1 1 0 0 0 0-2h-14Z"
            className="clr-i-outline clr-i-outline-path-3"
          ></path>
          <path
            fill="#0B6BCB"
            d="M17.5 3.42a1.09 1.09 0 0 0-1.55 0l-8.06 8.06l-3.38-3.64a1.1 1.1 0 1 0-1.61 1.5l4.94 5.3L17.5 5a1.1 1.1 0 0 0 0-1.58"
            className="clr-i-outline clr-i-outline-path-4"
          ></path>
          <path fill="none" d="M0 0h36v36H0z"></path>
        </svg>
        <Typography color="primary" level="h1" variant="plain">
          To-do List
        </Typography>
      </Box>
    </div>
  );
}

export default Header;
