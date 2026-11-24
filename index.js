const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./server/routes/user");
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!`));
