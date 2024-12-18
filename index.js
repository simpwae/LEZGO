const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello World!');
})
app.get('/mypage',(req,res)=>{
    res.send('mypage');
})
app.listen(3000);