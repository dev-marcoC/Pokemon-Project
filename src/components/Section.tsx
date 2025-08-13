import { Box, Divider, Typography, useTheme } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
interface props {
  title: string;
}

const Section = (props: props) => {
  const { title } = props;
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 4 } }}>
      <Typography
        variant="h5"
        color="primary"
        sx={{
          mr: { xs: 1, md: 4 },
          width: { xs: "unset", md: 200 },
        }}
      >
        {title}
      </Typography>

      <Divider
        sx={{ flex: 1, bgcolor: theme.palette.primary.main, height: "3px" }}
      />

      <CatchingPokemonIcon color="primary" fontSize="large" />

      <Divider
        sx={{ flex: 1, bgcolor: theme.palette.primary.main, height: "3px" }}
      />
    </Box>
  );
};

export default Section;
