import { Router } from 'express';

import { authRouter } from './auth.route.js';
import {eventRouter} from './event.route.js';

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/event", eventRouter);

export { routes };