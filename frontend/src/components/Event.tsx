import type { EventType } from "../views/Events";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CButton from "./Buttons";
import challenge from "../assets/challenge_logo.png";
import cup from "../assets/cup_logo.png";
import local from "../assets/local_logo.png";

interface Props {
  info: EventType;
}

const Event = (props: Props) => {
  const { info } = props;

  const setTipologiaEvento = () => {
    switch (info.tipologiaEvento) {
      case "Local":
        return local;
      case "Cup":
        return cup;
      case "Challenge":
        return challenge;
    }
  };

  return (
    <Box
      sx={{
        boxShadow: 2,
        p: { xs: 2, sm: 3, md: 4 }, // padding responsive
        backgroundColor: "primary.main",
        borderRadius: 2,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Info evento */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="h6" color="tertiary">
              {info.nomeEvento}
            </Typography>
            <Typography variant="h6" color="tertiary">
              {info.dataEvento} - {info.oraEvento}
            </Typography>
            <Typography variant="h6" color="tertiary">
              {info.luogoEvento}
            </Typography>
            <Typography variant="h6" color="tertiary">
              {info.nomeOrganizzatore}
            </Typography>
          </Box>
        </Grid>

        {/* Logo evento */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: { xs: 2, sm: 0 },
            }}
          >
            <img
              src={setTipologiaEvento()}
              style={{
                maxWidth: "150px",
                width: "100%",
                height: "auto",
              }}
              alt={info.tipologiaEvento}
            />
          </Box>
        </Grid>

        {/* Bottoni */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <CButton variantType="tertiary" fullWidth>
            Dettagli
          </CButton>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CButton variantType="tertiary" fullWidth>
            Partecipa
          </CButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Event;
