import express from "express";

import config from "./config.json";

const app = express();

const PORT = config.PORT;

app.use("*", (_req, res) => {
    return res.status(404).json({
        message: "Resource not found"
    });
});

app.listen(PORT, () => {
    console.log(`---- App is listening on port ${PORT} ----`);
});