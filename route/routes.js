import express from 'express';
import { getEmployees,addEmployee,getUserById ,editEmployee ,deleteEmployee} from '../controller/employee_controller.js';

const route=express.Router();
route.get('/',getEmployees);

route.post('/',addEmployee)

route.get('/:id',getUserById)

route.put('/:id',editEmployee)

route.delete('/:id',deleteEmployee)

export default route;