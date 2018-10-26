import express from "express";
import bodyParser from "body-parser";

import {
    getAllUsersHandler,
    getUserByIdHandler, 
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
} from "./Handlers";
import { UserService } from "./UserService";


const app = express();

const userService = new UserService();

app.use(bodyParser.json());

app.get("/users", getAllUsersHandler(userService));
app.get("/users/:id", getUserByIdHandler(userService));

app.post("/users", createUserHandler(userService));
app.patch("/user/:id", updateUserHandler(userService));
app.delete("/users/:id", deleteUserHandler(userService));

app.listen(3001);
