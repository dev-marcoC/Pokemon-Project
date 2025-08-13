import Box from "@mui/material/Box";
import Section from "../components/Section";
import CButton from "../components/Buttons";
import AddIcon from "@mui/icons-material/Add";

const Events = () => {
  return (
    <>
      <Section title="Events"></Section>
      <Box sx={{ mt: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <CButton
            variantType="secondary"
            startIcon={<AddIcon color="secondary" />}
          >
            Add new Event
          </CButton>
        </Box>
      </Box>
    </>
  );
};

export default Events;
