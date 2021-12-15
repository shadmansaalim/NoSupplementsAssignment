import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import noData from '../../images/noData.svg';
import swal from 'sweetalert';

const Home = () => {
    const [users, setUsers] = useState(0);

    //Fetching data from the API and storing them in state
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    //Delete user function calling because setUsers state is in this component so calling it here and prop drilling it to User component.
    const handleDeleteUser = id => {
        //Asking confirmation to improve UX
        swal({
            title: "Are you sure?",
            text: "User will be removed from the list!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const remainingUsers = users.filter(user => user.id !== id);
                    setUsers(remainingUsers);
                    swal("User Removed Successfully", {
                        icon: "success",
                    });
                }
            });

    }

    return (
        <div>
            {
                // Checking whether data is loading or not and also whether data is zero or not
                users.length
                    ?
                    <Users
                        users={users}
                        handleDeleteUser={handleDeleteUser}
                    ></Users>
                    :
                    users === 0
                        ?
                        // Loading Spinner to improve UX
                        <div class="spinner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        :
                        // Message to show on UI for good UX
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                            <div>
                                <h1 className="fw-bold">No Users Available</h1>
                                <p>Add users to the list to view.</p>
                                <img width="300px" src={noData} alt="" />
                            </div>
                        </div>
            }
        </div>
    );
};

export default Home;