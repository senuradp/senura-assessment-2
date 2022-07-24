import express from "express";

import { addUser, getUsers, getUser, editUser} from "../controller/user-controller.js";

const router = express.Router();

router.post('/add', addUser);
router.get('/user-list', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);

export default router;