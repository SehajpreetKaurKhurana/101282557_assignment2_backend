import { request, response } from 'express';
import EmployeeModel from '../model/employee.js'

export const getEmployees= async(request,response)=>{
    try{
        let employees= await EmployeeModel.find(); //fetch from  in db
         console.log("All Employees")
         response.status(200).send(employees)
         response.json(employees);
     }
     catch(err){
         console.log("Error Record Not Saves"+err)
         response.status(500).send(err)
     }
    
}


export const addEmployee= async(request,response)=>{
    const employee=request.body; // taken from UI
   
    const newEmployee=new EmployeeModel(employee);//new created
    try{
       await newEmployee.save(employee); //save in db
        console.log("Employee Record Saved")
        response.status(201).send("Employee Record Saved")
        response.json(newEmployee);
    }
    catch(err){
        console.log("Error Record Not Saves"+err)
        response.status(500).send(err)
    }
    
}



export const getUserById= async(request,response)=>{
const id=request.params.id;
try{
    const employee= await EmployeeModel.findById(id);
    response.json(employee); 
    response.status(200).send(employee)
}catch(err){
    console.log("No employee with that id "+err)
        response.status(500).send(err)
}

}

export const editEmployee=async(request,response)=>{
    const employee=request.body;
    const editEmployee=new EmployeeModel(employee);
    try{
      await EmployeeModel.updateOne({_id:request.params.id},editEmployee);
      response.status(200).send("updated");
      response.json(editEmployee);
      
    }catch(err){
        console.log("No employee with that id "+err)
        response.status(500).send(err)

    }
}
export const deleteEmployee= async(request,response)=>{
    const idn=request.params.id;
    try{
        await EmployeeModel.deleteOne({_id:idn});
        //response.json("User deleted successfully");
        response.status(204).send("Employee Deleted ")


    }catch(err){
        console.log("No employee with that id "+err)
        response.status(500).send(err)

    }

}