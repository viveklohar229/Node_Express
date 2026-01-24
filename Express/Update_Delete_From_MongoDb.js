const express = require("express");
const connectDB = require('./db/dbConnection')
const Employee = require('./models/EmployeeModel')
const app = express();

connectDB();


const getEmployes = async () => {
    const employees = await Employee.find();
    console.log(employees)
}


const updateEmployee = async (id, updatedData) => {
    const result = await Employee.updateOne({ _id: id }, { $set: updatedData });
    console.log(
        result.nModified === 0 ? `No updates for employee ${id}` : 'Udated  employee data : ', result
    )
}

const deleteEmployee = async (id) => {
    await Employee.findByIdAndDelete(id);
    console.log('Employee Data deleted successfully!')
}

const main = async () => {

    await getEmployes();

    const employeeID = "6974e2ebb9721f5e94bf6a43";
    const updatedData = {
        position: "Senior SOftware Engineer",
        department: "DEV"
    }

    await updateEmployee(employeeID, updatedData);
    await getEmployes();

    await deleteEmployee(employeeID);
    await getEmployes();

}

main()

app.listen(1000)