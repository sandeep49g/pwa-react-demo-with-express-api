import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import OrganizationChart from "@dabeng/react-orgchart";
import EmployeeCardTemplate from './EmployeeCardTemplate.js';
import './_team-structure.css';

const TeamStruture = () => {
    const [employeesHierarchy, setEmployeesHierarchy] = useState();
    useEffect(() => {
        const restAPIUrl = "https://sandeep49g-express-api-demo.netlify.app/.netlify/functions/api/employees-hierarchy";
        fetch(restAPIUrl).then((response) => {
            response.json().then((result) => {
                if (result) {
                    setEmployeesHierarchy(result);
                }
            });
        });
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

export default TeamStruture;