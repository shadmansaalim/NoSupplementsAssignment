import React from 'react';
import { Row } from 'antd';
import User from '../User/User';

const Users = ({ users }) => {
    return (
        <Row >
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                ></User>)
            }
        </Row >

    );
};

export default Users;