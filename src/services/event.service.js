import { eventRepo } from '../repositories/event.repo.js';



export const createEvent = async (eventData) => {
    const event = await eventRepo.create(eventData);
    return event;
};

export const getEvents = async () => {
    return await eventRepo.find()
};

export const getEventById = async (id) => {
    return await eventRepo.findById(id)
};

export const updateEvent = async (id, updatedEvent) => {
    const event = await eventRepo.updateById(id, updatedEvent);
    if (!event) {
        throw new Error('Event not found');
    }
    return event;
};

export const deleteEvent = async (id) => {
    const event = await eventRepo.deleteById(id)
    if (!event) {
        throw new Error('Event not found')
    };

    return event;
};

export const getEventsByUserId = async (userId) => {
    return await eventRepo.findByUserId(userId);
};
