import React from 'react';
import EmployeeProfile from '../EmployeeProfile/index';

export default function MyProfile()
{
    const userId = 8;
    return(
        <div className="pt-2 px-3">
            <EmployeeProfile employeeId={userId}  />
        </div>
    )
}