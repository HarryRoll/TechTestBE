import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import showImg from "../middleware/showImg";

const router = new Router()

router.get("/file/:filename",showImg.showFile)
router.get('/foodmenu',indexCtrl.menuCtrl.findFood)
router.get('/drinkmenu',indexCtrl.menuCtrl.findDrink)
router.get('/report',indexCtrl.menuCtrl.findReport)
router.get('/report/:id',indexCtrl.menuCtrl.findOneReport)
router.post('/report',indexCtrl.menuCtrl.createReport)


export default router