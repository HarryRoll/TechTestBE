import 'dotenv/config';
import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
//import models, {sequelize} from "./models/init-models";
//import routes from "./routes/indexRoutes"

const port  = process.env.PORT || 8082;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(helmet())
app.use(cors())
//app.use(async(req,res,next) => {
//     req.context = {models}
//     next()
// })

app.use('/foodmenu',function(req,res){
    res.send([{
        img : 1,
        foodName : 'nasi Goreng',
        price : 15000
    },{
        img : 2,
        foodName : 'nasi Goreng Kambing',
        price : 17000
    },{
        img : 3,
        foodName : 'nasi Goreng Udang',
        price : 17500
    },{
        img : 4,
        foodName : 'nasi Goreng Pedas',
        price : 16000
    }])
})

app.use('/drinkMenu',function(req,res){
    res.send(
[{
    img : 1,
    drinkName : 'Teh manis',
    price : 5000
},{
    img : 2,
    drinkName : 'Teh Tidak Manis',
    price : 3000
},{
    img : 3,
    drinkName : 'Teh manis Dingin',
    price : 6000
},{
    img : 4,
    drinkName : 'Teh manis Lemon',
    price : 7000
}])
})


    app.listen(port,() => console.log("Server is listen on port "+port))


export default app