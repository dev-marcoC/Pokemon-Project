from database import db
from datetime import datetime

class Event(db.Model):
    __tablename__ = "events"

    id = db.Column(db.Integer, primary_key=True)
    nomeEvento = db.Column(db.String(255), nullable=False)
    dataEvento = db.Column(db.Date, nullable=True)
    oraEvento = db.Column(db.Time, nullable=True)
    tipologiaEvento = db.Column(db.String(255), nullable=True)
    luogoEvento = db.Column(db.String(255), nullable=True)
    nomeOrganizzatore = db.Column(db.String(255), nullable=True)
    contatto = db.Column(db.String(255), nullable=True)
    maxPartecipanti = db.Column(db.Integer, nullable=True)
    note = db.Column(db.Text, nullable=True)
