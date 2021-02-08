import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

export default function Users() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        let url = "https://sandeep49g-express-api-demo.netlify.app/.netlify/functions/api/users";

        fetch(url).then((response) => {
            response.json().then((result) => {
                if (result && result.users) {
                    setUsersData(result.users);
                }
            });
        });
    }, []);

    return (
        <div className="users-list">
            {
                <Choose>
                    <When condition={usersData && usersData.length}>
                        <Table striped hover responsive variant="dark">
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
                                    usersData.map((userInfo) => (
                                        <tr key={userInfo.id}>
                                            <td>{userInfo.id}</td>
                                            <td>{userInfo.name}</td>
                                            <td>{userInfo.email}</td>
                                            <td>{userInfo.address.street}</td>
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
    )
}