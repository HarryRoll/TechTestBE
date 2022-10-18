import 'dotenv/config';
import express from "express";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import models, {sequelize} from "./models/init-models";
import indexRoute from './routes/indexRoute';
import routes from "./routes/indexRoute"

const port  = process.env.PORT || 8082;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(helmet())
app.use(cors())
app.use(async(req,res,next) => {
    req.context = {models}
    next()
})

app.use('/',routes.menuRoute)

    app.listen(port,() => console.log("Server is listen on port "+port))


export default app