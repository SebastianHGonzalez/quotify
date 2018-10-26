import express from "express";

import { getAllUsersHandler } from "./Handlers";
import { UserService } from "./UserService";


const app = express();

const userService = new UserService();

app.get("/users", getAllUsersHandler(userService));

app.listen(3001);
