import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'


const employeeSchema= new mongoose.Schema(

    {
        firstname:{
            type:String,
            require:true,
            trim:true,
            min: 3,
            max: 255,
            
            validate(v){
                if(v=0) throw new Error("Enter value");
            }
        },
        lastname:{
            type:String,
            require:true,
            trim:true,
            min: 3,
           max: 255,
            validate(v){
                if(v=0) throw new Error("Enter value");
            }
        },
        email:{
            type:String,
            require:true,
            
            validate(v){
                if(v=0) throw new Error("Enter valid email");
            }
        }
    }
);

 autoIncrement.initialize(mongoose.connection);
 employeeSchema.plugin(autoIncrement.plugin,'employee')
 const Employee= mongoose.model('employee',employeeSchema);
 
  

 export default Employee