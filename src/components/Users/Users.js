import React from 'react';
import { Row } from 'antd';
import User from '../User/User';

const Users = ({ users }) => {
    return (
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={{ width: '100%', margin: '0 auto' }}>
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