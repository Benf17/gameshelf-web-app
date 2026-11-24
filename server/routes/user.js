const express = require("express");
const router = express.Router();
const user = require("../models/user");

router.get("/", async (req, res) => {
    try {
        const users = await user.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving users" });
    }
});

module.exports = router;