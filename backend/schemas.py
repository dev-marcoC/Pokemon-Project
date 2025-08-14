from pydantic import BaseModel

class EventBase(BaseModel):
    name: str
    location: str

class EventCreate(EventBase):
    pass

class EventOut(EventBase):
    id: int

    class Config:
        orm_mode = True
