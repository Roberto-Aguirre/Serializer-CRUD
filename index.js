const exprees = require('express');
const app = exprees();
const PORT = 3000;

app.all('/*',(req,res)=>{
    res.status(404).send({message:'Element not found'})
})
app.listen(PORT,()=>{
    console.log(`Listening at: http://localhost:${PORT}`);
}) 