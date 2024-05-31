import { Router } from 'express';
import { authController } from '../controllers/index.js';

const authRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints para la autenticación de usuarios
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Loguea un usuario creado.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario.
 *                 example: usuario@example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *                 example: password123
 *     responses:
 *       200:
 *         description: Usuario logueado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT del usuario.
 *       500:
 *         description: El usuario o la contraseña son inválidos.
 */
authRouter.post('/login', authController.loginController);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registra un nuevo usuario.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre de usuario.
 *                 example: usuario123
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario.
 *                 example: usuario@example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *                 example: password123
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente.
 *       500:
 *         description: Error en el registro del usuario.
 */
authRouter.post('/register', authController.registerController);

export { authRouter };
