import React from 'react';
import { Row } from 'antd';
import User from '../User/User';

const Users = ({ users, handleDeleteUser }) => {
    return (
        <Row >
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