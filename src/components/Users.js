import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

export default function Users() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        //let url = "https://jsonplaceholder.typicode.com/users";
        let url = "https://sandeep49g-express-api-demo.netlify.app/.netlify/functions/api/users";

        fetch(url).then((response) => {
            response.json().then((result) => {
                if (result && result.users) {
                    setUsersData(result.users);
                }
                //localStorage.setItem("users", JSON.stringify(result));
            });
        }).catch(err => {
            // setMode('offline');
            // let collection = localStorage.getItem('users');
            // setUsersData(JSON.parse(collection));
        });
    }, []);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}