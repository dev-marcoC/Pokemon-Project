import { Button, useTheme, type ButtonProps } from "@mui/material";
import React from "react";

interface CButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "tertiary";
  to?: string;
  component?: React.ElementType;
  fullWidth?: boolean;
}

const CButton = ({ variantType = "primary", ...props }: CButtonProps) => {
  const theme = useTheme();
  let styles = {};

  switch (variantType) {
    case "primary":
      styles = {
        backgroundColor: theme.palette.tertiary.main,
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.tertiary.main,
        },
      };
      break;
    case "secondary":
      styles = {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.tertiary.main,
        "&:hover": {
          backgroundColor: theme.palette.tertiary.main,
          color: theme.palette.primary.main,
        },
      };

      break;
    case "tertiary":
      styles = {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.tertiary.main,
          color: theme.palette.primary.main,
        },
      };
      break;
  }

  return (
    <Button
      fullWidth={props.fullWidth}
      {...props}
      sx={{
        textTransform: "none",
        borderRadius: 1,
        px: 2,
        py: 1,
        fontSize: { xs: "14px", md: "20px" },
        transition: "all 0.3s ease-out;",
        ...styles,
      }}
    />
  );
};

export default CButton;
