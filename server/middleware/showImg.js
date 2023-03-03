import fs from "fs"

const showFile = async(req,res) => {
    const filename = req.params.filename
    const url = `${process.cwd()}/img/${filename}`
    fs.createReadStream(url)
    .on('error',()=>responseNotFound(req,res))
    .pipe(res)
}

function responseNotFound(req,res){
    res.writeHead(404,{'Content-Type' : 'text/plain'})
    res.end('not found')
}


export default {showFile}