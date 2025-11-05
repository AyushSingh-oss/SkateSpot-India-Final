import { clerkClient, requireAuth } from "@clerk/express";
import express from 'express';
const router = express.Router();
import { auth } from "../middlewares/auth";

router.post('/me', requireAuth(), auth);