import Box from "@mui/material/Box";
import Section from "../components/Section";
import CButton from "../components/Buttons";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <>
      <Section title="Events"></Section>
      <Box sx={{ mt: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <CButton
            variantType="secondary"
            startIcon={<AddIcon color="secondary" />}
            component={Link}
            to="/add-event"
            disabled={location.pathname === "/add-event"}
          >
            Add new Event
          </CButton>
        </Box>
      </Box>
    </>
  );
};

export default Events;
