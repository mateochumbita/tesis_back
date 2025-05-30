import express from 'express';
import clientRoutes from './clients/routes.js'; // Importar las rutas de clientes
// Importa aquí las rutas de otros módulos cuando las tengas
import userRoutes from './users/routes.js'
import hairdresserRoutes from './hairdressers/routes.js'; // Importar las rutas de peluqueros
import profileRoutes from './profiles/routes.js'; // Importar las rutas de perfil
import appointmentRoutes from './appointments/routes.js'; // Importar las rutas de citas
import earningsRoutes from './earnings/routes.js'; // Importar las rutas de ganancias

import servicesRoutes from './services/routes.js'; // Importar las rutas de servicios

// import productRoutes from './products/routes.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

import { register, login } from '../service/genericService.js';
const router = express.Router();

// Asignar rutas de cada módulo a un endpoint general
router.use('/clients', authenticateToken, clientRoutes); // Middleware aplicado correctamente
router.use('/users', authenticateToken,userRoutes); // Rutas de usuarios
router.use('/hairdressers', authenticateToken, hairdresserRoutes); // Rutas de peluqueros
router.use('/profiles', authenticateToken, profileRoutes); // Rutas de perfil
router.use('/appointments', authenticateToken, appointmentRoutes); // Rutas de citas

//RUTAS LIBRES DE AUTHENTICACION
router.post('/auth/register',register); // Rutas de registro de usuarios
router.post('/auth/login', login); // Rutas de inicio de sesión de usuarios

router.use('/earnings', authenticateToken, earningsRoutes); // Rutas de ganancias
router.use('/services', authenticateToken, servicesRoutes); // Rutas de servicios

// router.use('/auth/logout', userRoutes.logout); // Rutas de cierre de sesión de usuarios


export default router;