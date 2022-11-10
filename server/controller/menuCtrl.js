import argon2 from "argon2";

const findFood = async(req,res) => {
    try{
        const result = await req.context.models.food.findAll()
        return res.send(result)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findDrink = async(req,res) => {
    try{
        const result = await req.context.models.drink.findAll()
        return res.send(result)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findReport = async(req,res) => {
    try{
        const result = await req.context.models.report.findAll({
            include : [{
                model : req.context.models.orderlist,
                as : "orderlists",
                required : true
            }]
        })
        return res.send(result)
    }catch(error){
        return res.status(404).send(error)
    }
}

const findOneReport = async (req,res)=>{
    try {
        const result = await req.context.models.report.findOne({
            where:{id_report : req.params.id},
            include : [{
                model : req.context.models.orderlist,
                as : "orderlists",
                required : true
            }]
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const createReport = async (req,res)=>{
    try {
        const result = await req.context.models.report.create({
            tablenumber: req.body.tablenumber,
            total : req.body.total
        })
        const data = {id : result.id_report, order : req.body.orderreport}
        createTable(req,res,data)
        return res.send(result)
    }catch(error){
        return res.status(404).send(error)
    }

}

const createTable = async(req,res,data) => {
    console.log(data)
    try {
        data.order.map(async e=>{
        const result = await req.context.models.orderlist.create({
            id_report : data.id,
            menuname : e.menuName,
            price : e.Price,
            qty : e.qty
        })
    })
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findFood,
    findDrink,
    findReport,
    createReport,
    findOneReport
}