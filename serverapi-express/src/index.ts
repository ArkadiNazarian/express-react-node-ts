import  express from 'express'
const app= express() 
app.get('/health',(request,response)=>{
    const date= new Date()
    response.send({
        conntected:true,
        last_check:date
    })
})
app.listen(8080)
