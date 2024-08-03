import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Entro al auth');
});

router.get('/about', (req, res) => {
    res.send('Entro al about de auth');
});

export { router as authRouter };