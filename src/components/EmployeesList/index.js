import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import './_employee-list.css';

const EmployeesList = () => {
    const [employeesList, setEmployeesList] = useState([]);
    let { url } = useRouteMatch();
    
    const getEmployeesList = async () => {
        const restAPIUrl = "https://sandeep49g-express-api-demo.netlify.app/.netlify/functions/api/employees";
        // const restAPIUrl = "http://localhost:9000/.netlify/functions/api/employees";
        const response = await fetch(restAPIUrl);
        const result = await response.json();
        if (result && result.employeesList) {
            setEmployeesList(result.employeesList);
        }
    };
    
    useEffect(() => {
        getEmployeesList();
        return () => {
            setEmployeesList([]);
        };
    }, []);

    return (
        <div className="pt-2 px-3">
            <h3>My Team</h3>
            <div className="employees-list pt-2">
                {
                    <Choose>
                        <When condition={employeesList && employeesList.length}>
                            <Table striped hover responsive variant="dark">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Designation</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        // employeesList.map((userInfo) => (
                                        <For each="userInfo" of={employeesList}>
                                            <tr key={userInfo.employeeId}>
                                                <td>
                                                    <Link to={`${url}/${userInfo.employeeId}`}>
                                                        {userInfo.name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`${url}/${userInfo.employeeId}`}>
                                                        {userInfo.designation}
                                                    </Link>
                                                </td>
                                                <td>
                                                    {userInfo.email}
                                                </td>
                                                <td>
                                                    {userInfo.phone}
                                                </td>
                                            </tr>
                                        </For>
                                        // ))
                                    }
                                </tbody>
                            </Table>
                        </When>
                        <Otherwise>
                            <Skeleton height={50} count={10} duration={2} />
                        </Otherwise>
                    </Choose>
                }
            </div>
        </div> 
    )
};

export default EmployeesList;