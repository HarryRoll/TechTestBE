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
        const result = await req.context.models.report.findAll()
        return res.send(result)
    }catch(error){
        return res.status(404).send(error)
    }
}

const createReport = async (req,res)=>{
    try {
        const result = await req.context.models.report.create({
            orderreport: req.body.orderreport,
            tablenumber: req.body.tablenumber,
            total : req.body.total
        })
        return res.send(result)
    }catch(error){
        return res.status(404).send(error)
    }
}

export default {
    findFood,
    findDrink,
    findReport,
    createReport
}