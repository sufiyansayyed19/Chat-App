import express from 'express';
import { signup } from '../controllers/auth.controller.js';
import { login } from '../controllers/auth.controller.js';
import { logout } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router(); //creates a new router object that acts as a mini Express application

router.post("/signup", signup );

router.post("/login",login);

router.post("/logout",logout);

router.put("/update-proflie", protectRoute, updateProfile);

export default router;