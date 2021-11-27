import { Router } from "express";
import notes from "./notes";
import users from "./users";

const router = Router();
    
router.use('/users', users);
router.use('/notes', notes);

export default router;