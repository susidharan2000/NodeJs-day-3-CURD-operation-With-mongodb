import Employee from "../Models/EmpSchema.js";

export const createEmp = async(req,res)=>{
    try{
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(200).json({Message:"Employee Added Successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Create Method"});
    }
}

export const getEmployee = async(req,res)=>{
    try{
        const employee = await Employee.find();
        res.status(200).json({Message:"Employee Details",data:employee})
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Get Emnployee Method"});
    }
}

export const getEmployeeById = async(req,res)=>{
    try{
        const Emp_id = req.params.id;
        const employee = await Employee.findById(Emp_id);
        if(!employee){
            res.status(404).send("Id not Found");
        }
        res.status(200).json({Message:"Employee Detail",data:employee})
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in Get Emnployee Method By id"});
    }
}

export const updateEmp = async(req,res)=>{
    try{
        const Emp_id = req.params.id;
        const {emp_FirstName,emp_LastName,emp_Email,emp_designation} = req.body;
        const result = await Employee.updateOne({_id:Emp_id},{emp_FirstName,emp_LastName,emp_Email,emp_designation});

        if(result.matchedCount == 0){
            res.status(404).send("Id not Found");
        }
        const updateEmp = await Employee.findById(Emp_id);
        res.status(200).json({Message:"Employee Details Updated Successfully",data:updateEmp})
    }
    catch(error){
        console.log(error);
        res.status(500).json({Message:"Internal Server Error in update Method"});
    }
}

export const deleteEmp = async (req, res) => {
    try {
        const Emp_id = req.params.id;
        const findData = await Employee.findById(Emp_id);

        if (!findData) {
            return res.status(404).send("Id not Found");
        }

        await Employee.deleteOne({ _id: Emp_id });

        return res.status(200).json({ Message: "Employee Deleted Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ Message: "Internal Server Error in Delete Method" });
    }
};