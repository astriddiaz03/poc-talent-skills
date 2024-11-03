const EmployeeAvailability = require('../models/employeeAvailability');

const EmployeeAvailabilityService = {};

EmployeeAvailabilityService.updateAvailability = async (employee) => {
       
    const updatedAvailability = await EmployeeAvailability.findOneAndUpdate(
        { employee: employee }, 
        { isAvailable: false },  
        { new: true }            
    );

    if (!updatedAvailability) {
        throw new Error("Registro no encontrado.");
    }

    return updatedAvailability;
};

module.exports = EmployeeAvailabilityService;
