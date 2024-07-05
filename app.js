const express = require("express")

const os = require("os")

const app = express()

const port =  3000

app.use('/', async (req,res)=>{
    console.log(`Quem esta respondendo: ${os.hostname()}}`)
    res.json({ 'status': 'ok, funcionando', 'hostname': os.hostname()})
})

app.listen(port,()=>{
    console.log(`Escutando na porta ${port}`)
})