import  mongoose from "mongoose";

const emp_Schema = mongoose.Schema({
    emp_FirstName:String,
    emp_LastName:String,
    emp_Email:String,
    emp_designation:String,
})
const Employee = mongoose.model("Employee",emp_Schema);

export default Employee;