import { Routes, Route } from "react-router-dom";
import TournamentDecklist from "../views/TournamentDecklist";
import Layout from "../components/Layout";
import Events from "../views/Events";
import ContactUs from "../views/ContactUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Events />} />
        <Route path="decklist" element={<TournamentDecklist />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}
