import express from "express";
import router from express.Router();

const app = express();

router.get('/users', (req, res) => { 
    res.send("header");
})