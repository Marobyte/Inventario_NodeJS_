import { Router } from "express";
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Home'}))

router.get('/Registro', (req, res) => res.render('Registro', { title: 'Registro'}))

router.get('/Login', (req, res) => res.render('Login', { title: 'Login'}))

export default router
