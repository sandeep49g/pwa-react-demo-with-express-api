import React, { useState, useEffect } from 'react';
import OrganizationChart from "@dabeng/react-orgchart";
import EmployeeCardTemplate from './EmployeeCardTemplate.js';
import './_team-structure.css';

export default function TeamStruture()
{
    const [employeesHierarchy, setEmployeesHierarchy] = useState([]);

    useEffect(() => {
        let url = "https://sandeep49g-express-api-demo.netlify.app/.netlify/functions/api/employees-hierarchy";

        fetch(url).then((response) => {
            response.json().then((result) => {
                if (result) {
                    setEmployeesHierarchy(result);
                }
            });
        });
    }, []);

    return(
        <div className="pt-2 px-3">
            <h3>Team Struture</h3>
            <OrganizationChart
                chartClass="myChart"
                datasource={employeesHierarchy}
                NodeTemplate={EmployeeCardTemplate}
            />
        </div>
    )
}