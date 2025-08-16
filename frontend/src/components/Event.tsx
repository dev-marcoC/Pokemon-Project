import React from "react";
import type { EventType } from "../views/Events";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  info: EventType;
  key: number;
}

const Event = (props: Props) => {
  const { info } = props;
  return (
    <>
      <Box
        sx={{
          boxShadow: 2,
          padding: 4,
          backgroundColor: "primary.main",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" color="tertiary">
          {info.nomeEvento}
        </Typography>
      </Box>
    </>
  );
};

export default Event;
