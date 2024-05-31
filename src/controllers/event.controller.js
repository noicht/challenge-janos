

import { createEvent, deleteEvent, getEventById, getEvents, updateEvent } from "../services/event.service.js";
import { catchError } from "../utils/index.js";




export const getEventsController = async (req, res) => {
    try {
      const events = await getEvents();
      return res.json({ status: true, data: events });
    } catch (error) {
      return catchError(res, error.message);
    }
  };

export const getEventsByIdController = async (req, res) => {
    try {
      const event = await getEventById(req.params.id);
      return res.json({ status: true, data: event });
    } catch (error) {
      return catchError(res, error.message);
    }
};

export const createEventController = async (req, res) => {
    try {
        const { eventTitle, description, date, location } = req.body;
        console.log(req.user._id)
        const userId = req.user._id; // Asumiendo que el ID del usuario autenticado está en req.user.id


        const event = await createEvent({ eventTitle, description, date, location, userId });
        return res.json({ status: true, data: event });
    } catch (error) {
        return catchError(res, error.message);
    }
};

export const updateEventController = async (req, res) => {
    try {
        const event = await updateEvent(req.params.id, req.body);
        return res.json({ status: true, data: event });
    } catch (error) {
        return catchError(res, error.message);
    }
};

export const deleteEventController = async (req, res) => {
    try {
        const event = await deleteEvent(req.params.id);
        return res.json({ status: true, data: event });
    } catch (error) {
        return catchError(res, error.message);
    }
};