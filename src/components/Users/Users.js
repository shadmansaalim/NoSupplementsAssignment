import React from 'react';
import { Row } from 'antd';
import User from '../User/User';

const Users = ({ users, handleDeleteUser }) => {
    return (
        <Row >
            {/* Iterating through the users array that is found from the props and passing each user to User component */}
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                    handleDeleteUser={handleDeleteUser}
                ></User>)
            }
        </Row >

    );
};

export default Users;