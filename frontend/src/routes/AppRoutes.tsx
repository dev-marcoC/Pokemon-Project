import { Routes, Route } from "react-router-dom";
import TournamentDecklist from "../views/TournamentDecklist";
import Layout from "../components/Layout";
import Events from "../views/Events";
import ContactUs from "../views/ContactUs";
import CreateNewEvent from "../views/CreateNewEvent";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Events />} />
        <Route path="decklist" element={<TournamentDecklist />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="add-event" element={<CreateNewEvent />} />
      </Route>
    </Routes>
  );
}
