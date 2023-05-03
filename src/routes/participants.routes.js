import { Router } from "express";

import { getParticipants } from "../controllers/participants.controller";
import { createParticipants } from "../controllers/participants.controller";

const router = Router();

router.get("/participants", getParticipants);

router.post("/participants", createParticipants);

router.put("/participants");

export default router;
