import { Router } from 'express';
import { eventController } from '../controllers/index.js';
import { checkAuth } from '../middleware/checkAuth.js';

const eventRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - eventTitle
 *         - description
 *         - date
 *         - location
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-generado del evento
 *         eventTitle:
 *           type: string
 *           description: Título del evento
 *         description:
 *           type: string
 *           description: Descripción del evento
 *         date:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora del evento
 *         location:
 *           type: string
 *           description: Ubicación del evento
 *         userId:
 *           type: string
 *           description: ID del usuario que creó el evento
 *         isDeleted:
 *           type: boolean
 *           description: Indicador de si el evento está eliminado
 *       example:
 *         eventTitle: "Conferencia de Tecnología 2024"
 *         description: "Una conferencia sobre las últimas tendencias en tecnología."
 *         date: "2024-07-25T10:00:00Z"
 *         location: "Centro de Convenciones, Ciudad de México"
 *         userId: "60d0fe4f5311236168a109ca"
 *         isDeleted: false
 */

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Obtiene todos los eventos
 *     tags: [Event]
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */
eventRouter.get('/', eventController.getEventsController);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: Obtiene un evento por ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del evento
 *     responses:
 *       200:
 *         description: Evento obtenido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Evento no encontrado
 */
eventRouter.get('/:id', eventController.getEventsByIdController);

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Crea un nuevo evento
 *     tags: [Event]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: El evento ha sido creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       400:
 *         description: Error de validación
 */
eventRouter.post('/', checkAuth(), eventController.createEventController);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     summary: Actualiza un evento existente
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del evento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: El evento ha sido actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Evento no encontrado
 */
eventRouter.put('/:id', checkAuth(),eventController.updateEventController);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Elimina un evento
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del evento
 *     responses:
 *       200:
 *         description: El evento ha sido eliminado
 *       404:
 *         description: Evento no encontrado
 */
eventRouter.delete('/:id', checkAuth(),eventController.deleteEventController);

export { eventRouter };
