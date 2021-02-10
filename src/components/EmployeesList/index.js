import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import './_employee-list.css';

export default function EmployeesList() {
    const [employeesList, setEmployeesList] = useState([]);
    let { url } = useRouteMatch();

    useEffect(() => {
        let restAPIUrl = "https://sandeep49g-express-api-demo.netlify.app/.netlify/functions/api/employees";
        fetch(restAPIUrl).then((response) => {
            response.json().then((result) => {
                if (result && result.employeesList) {
                    setEmployeesList(result.employeesList);
                }
            });
        });
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employeesList.map((userInfo) => (
                                            <tr key={userInfo.id}>
                                                <td>
                                                    <Link to={`${url}/${userInfo.id}`}>
                                                        {userInfo.name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`${url}/${userInfo.id}`}>
                                                        {userInfo.designation}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`${url}/${userInfo.id}`}>
                                                        {userInfo.email}
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
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
}