from flask import Flask, request, jsonify
from flask_cors import CORS
from database import db, DB_URI
from models import Event
from datetime import datetime
from flask_migrate import Migrate
# ...


app = Flask(__name__)
CORS(app)

# Config DB
app.config["SQLALCHEMY_DATABASE_URI"] = DB_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)
migrate = Migrate(app, db)

# Creiamo le tabelle subito all'avvio
with app.app_context():
    db.create_all()

@app.route("/events", methods=["GET"])
def get_events():
    events = Event.query.all()
    result = []
    for e in events:
        result.append({
            "id": e.id,
            "nomeEvento": e.nomeEvento,
            "dataEvento": e.dataEvento.isoformat() if e.dataEvento else None,
            "oraEvento": e.oraEvento.strftime("%H:%M") if e.oraEvento else None,
            "tipologiaEvento": e.tipologiaEvento,
            "luogoEvento": e.luogoEvento,
            "nomeOrganizzatore": e.nomeOrganizzatore,
            "contatto": e.contatto,
            "maxPartecipanti": e.maxPartecipanti,
            "note": e.note
        })
    return jsonify(result)

@app.route("/events", methods=["POST"])
def create_event():
    data = request.json

    data_evento = datetime.strptime(data["dataEvento"], "%Y-%m-%d").date() if data.get("dataEvento") else None
    ora_evento = datetime.strptime(data["oraEvento"], "%H:%M").time() if data.get("oraEvento") else None

    event = Event(
        nomeEvento=data.get("nomeEvento"),
        dataEvento=data_evento,
        oraEvento=ora_evento,
        tipologiaEvento=data.get("tipologiaEvento"),
        luogoEvento=data.get("luogoEvento"),
        nomeOrganizzatore=data.get("nomeOrganizzatore"),
        contatto=data.get("contatto"),
        maxPartecipanti=int(data["maxPartecipanti"]) if data.get("maxPartecipanti") else None,
        note=data.get("note")
    )
    db.session.add(event)
    db.session.commit()

    return jsonify({"message": "Evento creato con successo", "id": event.id}), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
