import React from 'react';
import EmployeeProfile from '../EmployeeProfile/index';

const MyProfile = () => {
    // const userId = '6033ce0198ba5338343f0b23';  // Mongodb default ID: _id
    const loggedUserId = 78881108;                // Custom ID generated for each user: employeeId
    return (
        <div className="pt-2 px-3">
            <EmployeeProfile employeeId={loggedUserId}  />
        </div>
    );
};

export default MyProfile;