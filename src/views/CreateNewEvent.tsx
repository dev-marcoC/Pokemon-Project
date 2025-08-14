import React, { useState } from "react";
import { Box, TextField, MenuItem, Typography } from "@mui/material";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import Section from "../components/Section";
import CButton from "../components/Buttons";

type Props = {};

const CreateNewEvent = (props: Props) => {
  const [formData, setFormData] = useState({
    nomeEvento: "",
    dataEvento: null as Dayjs | null,
    oraEvento: null as Dayjs | null,
    tipologiaEvento: "",
    luogoEvento: "",
    nomeOrganizzatore: "",
    contatto: "",
    maxPartecipanti: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.dataEvento) {
      alert("Seleziona una data valida.");
      return;
    }

    if (formData.dataEvento.isBefore(dayjs().startOf("day"))) {
      alert("La data dell'evento non può essere nel passato.");
      return;
    }

    console.log("Dati inviati:", {
      ...formData,
      dataEvento: formData.dataEvento.format("YYYY-MM-DD"),
      oraEvento: formData.oraEvento ? formData.oraEvento.format("HH:mm") : null,
    });
  };

  return (
    <>
      <Section title="" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        my={{ xs: 2, sm: 4 }}
        px={0}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "primary.main",
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            boxShadow: 3,
            width: "100%",
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h5" color="secondary" textAlign="center" mb={2}>
            Crea un nuovo evento
          </Typography>

          <TextField
            label="Nome evento"
            name="nomeEvento"
            value={formData.nomeEvento}
            onChange={handleChange}
            fullWidth
            required
            color="secondary"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <DatePicker
                label="Data evento"
                value={formData.dataEvento}
                onChange={(newValue) =>
                  setFormData({ ...formData, dataEvento: newValue })
                }
                format="DD/MM/YYYY"
                minDate={dayjs()}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    required: true,
                    color: "secondary",
                  },
                }}
              />

              <TimePicker
                label="Ora evento"
                value={formData.oraEvento}
                onChange={(newValue) =>
                  setFormData({ ...formData, oraEvento: newValue })
                }
                ampm={false}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    required: true,
                    color: "secondary",
                  },
                }}
              />
            </Box>
          </LocalizationProvider>

          <TextField
            label="Tipologia di Evento"
            name="tipologiaEvento"
            select
            value={formData.tipologiaEvento}
            onChange={handleChange}
            fullWidth
            required
            color="secondary"
          >
            <MenuItem value="Local">Local</MenuItem>
            <MenuItem value="Cup">Cup</MenuItem>
            <MenuItem value="Challenge">Challenge</MenuItem>
          </TextField>

          <TextField
            label="Luogo evento"
            name="luogoEvento"
            value={formData.luogoEvento}
            onChange={handleChange}
            fullWidth
            required
            color="secondary"
          />

          <TextField
            label="Nome organizzatore"
            name="nomeOrganizzatore"
            value={formData.nomeOrganizzatore}
            onChange={handleChange}
            fullWidth
            required
            color="secondary"
          />

          <TextField
            label="Contatto (email o telefono)"
            name="contatto"
            value={formData.contatto}
            onChange={handleChange}
            fullWidth
            required
            color="secondary"
          />

          <TextField
            label="Numero massimo partecipanti"
            name="maxPartecipanti"
            type="number"
            value={formData.maxPartecipanti}
            onChange={handleChange}
            fullWidth
            color="secondary"
            inputProps={{ min: 1 }}
          />

          <TextField
            label="Note aggiuntive"
            name="note"
            value={formData.note}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            placeholder="Scrivi eventuali informazioni extra..."
            color="secondary"
          />

          <CButton
            type="submit"
            variant="contained"
            sx={{ mt: 2, alignSelf: "center" }}
          >
            Salva Evento
          </CButton>
        </Box>
      </Box>
    </>
  );
};

export default CreateNewEvent;
