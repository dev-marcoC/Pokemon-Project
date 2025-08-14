import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Section from "../components/Section";
import CButton from "../components/Buttons";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

interface EventType {
  id: number;
  nomeEvento: string;
  dataEvento: string | null;
  oraEvento: string | null;
  tipologiaEvento: string;
  luogoEvento: string;
  nomeOrganizzatore: string;
  contatto: string;
  maxPartecipanti: number;
  note: string;
}

const Events = () => {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/events") // oppure l'URL del tuo backend in docker
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      })
      .catch((err) => console.error("Errore caricamento eventi:", err));
  }, []);

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

        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id}>
              <strong>{event.nomeEvento}</strong> - {event.dataEvento}{" "}
              {event.oraEvento}
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </Box>
    </>
  );
};

export default Events;
