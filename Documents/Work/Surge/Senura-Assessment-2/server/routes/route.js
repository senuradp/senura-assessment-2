import express from "express";

import { addUser, getUsers, getUser, editUser, deleteUser, loginUser, addNotes} from "../controller/user-controller.js";
import { authenticateJWT } from "../middleware/middleware.js";

const router = express.Router();

router.post('/login', loginUser);
router.post('/add', authenticateJWT, addUser);
router.post('/add-note',authenticateJWT,addNotes);
router.get('/user-list',authenticateJWT, getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;