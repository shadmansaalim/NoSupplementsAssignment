import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useState([]);

    //Fetching data from the API and storing them in state
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return (
        <div>
            <Users users={users}></Users>
        </div>
    );
};

export default Home;