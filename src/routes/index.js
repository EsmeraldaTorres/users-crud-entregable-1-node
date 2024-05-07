const express = require("express");
const usersRouter = require("./users.router");
const router = express.Router();

// colocar las rutas aquí
router.use(usersRouter);

module.exports = router;
