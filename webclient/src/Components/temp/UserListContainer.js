import React, { useState } from 'react';
import ApiService from '../../utils/ApiService';
import UserForm from './UserForm';
import UserList from './UserList';

function UserListContainer() {
    const [users, setUsers] = useState([]);
    const search = async (params) => {
        try {
            const users = await ApiService.getUsers(params);
            setUsers(users);
        } catch (e) {
            console.error(`An error ${e.message} occured while searching users`);
        }
    };

    return (
        <div className="user">
            <UserForm submitHandler={search} />
            <UserList users={users} />
        </div>
    );
}

export default UserListContainer;