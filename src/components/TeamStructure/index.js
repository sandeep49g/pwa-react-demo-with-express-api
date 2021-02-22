import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import OrganizationChart from "@dabeng/react-orgchart";
import EmployeeCardTemplate from './EmployeeCardTemplate.js';
import './_team-structure.css';

const TeamStructure = () => {
    const [employeesHierarchy, setEmployeesHierarchy] = useState();

    const getEmployeesHierarchy = async () => {
        const restAPIUrl = "https://sandeep49g-express-api-demo.netlify.app/.netlify/functions/api/employees-hierarchy";
        // const restAPIUrl = "http://localhost:9000/.netlify/functions/api/employees-hierarchy";
        const response = await fetch(restAPIUrl);
        const result = await response.json();
        if (result) {
            setEmployeesHierarchy(result);
        }
    };

    useEffect(() => {
        getEmployeesHierarchy();
        return () => {
            setEmployeesHierarchy({});
        };
    }, []);

    return (
        <div className="pt-2 px-3">
            <h3>Team Structure</h3>
            <Choose>
                <When condition={employeesHierarchy}>
                    <OrganizationChart
                        chartClass="myChart"
                        datasource={employeesHierarchy}
                        NodeTemplate={EmployeeCardTemplate}
                    />
                </When>
                <Otherwise>
                    <Skeleton height={100} count={5} duration={2} />
                </Otherwise>
            </Choose>
        </div>
    )
};

export default TeamStructure;