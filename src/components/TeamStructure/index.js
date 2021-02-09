import React from 'react';
import OrganizationChart from "@dabeng/react-orgchart";
import EmployeeCardTemplate from './EmployeeCardTemplate.js';
import './_team-structure.css';

export default function TeamStruture()
{
    const ds = {
        id: "n1",
        name: "Pavan Podila",
        title: "Senior Director Technology",
        children: [
            {
                id: "n2",
                name: "Ankit Khandelwal",
                title: "Senior Manager XT",
                children: [{ id: "n5", name: "Paritosh baranwal", title: "Senior Associate XT L2" }]
            },
            {
                id: "n3",
                name: "Pranav Kaushik",
                title: "Senior Manager XT",
                children: [
                    { id: "n6", name: "Sanjay Kumar", title: "Senior Associate XT L2" },
                    {
                        id: "n7",
                        name: "Dhruwat Bhagat",
                        title: "Specialist Platform",
                        children: [
                            { id: "n10", name: "Nishant Baranwal", title: "Senior Associate XT L2" },
                            { id: "n11", name: "Mohit Thakur", title: "Senior Associate XT L2" }
                        ]
                    },
                    { id: "n8", name: "Sandeep Garg", title: "Senior Associate XT L2" },
                    {
                        id: "n9",
                        name: "Navneet Kumar",
                        title: "Manager XT",
                        children: [
                            { id: "n12", name: "Himanshu Pathak", title: "Senior Associate XT L1" }
                        ]
                    }
                ]
            },
            {
                id: "n4",
                name: "Chandra Shekhar Pant",
                title: "Senior Manager XT"
            }
        ]
    };

    return(
        <div className="pt-2 px-3">
            <h3>Team Struture</h3>
            <OrganizationChart datasource={ds} chartClass="myChart" NodeTemplate={EmployeeCardTemplate} />
        </div>
    )
}