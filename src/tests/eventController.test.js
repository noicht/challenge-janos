import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../index.js'; // Asumiendo que app es tu instancia de Express
import { Event } from '../models/Event.model.js';
import { User } from '../models/User.model.js';
import { DB_URI, JWT_SECRET } from '../config/constants.js';
import jwt from 'jsonwebtoken';
import { loginUser, registerUser } from '../services/auth.service.js';

describe('Event API', () => {
    let token;
    let userId;

    beforeAll(async () => {
        await mongoose.connect(DB_URI);


        const user = await registerUser("testUser5", "mail5@mail.com","12345")
        userId = user._id;
        const logUser = await loginUser("testUser5","12345")
        token = logUser.token

        console.log('Generated Token:', token); 
    });

    afterAll(async () => {

        await User.deleteMany();
        await Event.deleteMany();
        await mongoose.connection.close();
    });

    it('should create an event', async () => {
        const eventData = {
            eventTitle: 'Test Event',
            description: 'Test Description',
            date: '2024-07-25T10:00:00Z',
            location: 'Test Location',
        };

        const response = await request(app)
            .post('/event')
            .set('Authorization', `Bearer ${token}`)
            .send(eventData);
            console.log('Generated Token2:', token); 


        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data.eventTitle).toBe(eventData.eventTitle);
    });

    it('should fetch all events', async () => {
        const response = await request(app)
            .get('/event')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);
    }, 10000); 
});
