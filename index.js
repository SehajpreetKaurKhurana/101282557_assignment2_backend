import route from './route/routes.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser'



let app=express();


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/v1/employees',route);







const PORT =9090
const url ="mongodb+srv://user:sehaj@101282557assignment2.ujdre.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url,
    {
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
    }
    ).then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server running successfully on PORT ${PORT}`)
        });   
    }).catch(error=>{console.log('Errorooooo',error.message)})

