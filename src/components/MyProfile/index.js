import React from 'react';
import EmployeeProfile from '../EmployeeProfile/index';

const MyProfile = () => {
    const userId = 8;
    return (
        <div className="pt-2 px-3">
            <EmployeeProfile employeeId={userId}  />
        </div>
    );
};

export default MyProfile;