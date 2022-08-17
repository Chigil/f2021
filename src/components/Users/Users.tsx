import React, {ChangeEvent, FC, useState} from 'react';
import {USERS} from "./usersData";
import {IUser} from "./IUser";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>(USERS);
    const [search, setSearch] = useState('');
    const deleteUser = (id: number) => {
        const isDelete = window.confirm("Do you really delete this user?");
        if (isDelete) {
            setUsers(users.filter(user => user.id !== id));
        }
    };
    const searchedUsers = () => {
        console.log('searched');
        if (search) {
            return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
        }
        return users;
    };
    //console.log(searchedUsers());
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input type="text"
                       className="form-control"
                       placeholder="Username"
                       aria-label="Username"
                       aria-describedby="basic-addon1"
                       onChange={(event) => setSearch(event.target.value)}
                />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {users.length
                    ?
                    searchedUsers().map(user =>
                        <div className="col" key={user.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{`№${user.id} - ${user.name}`}</h5>
                                    <p className="card-text">Email: {user.email}</p>
                                    <p className="card-text">City: {user.address.city}</p>
                                    <p className="card-text">Company: {user.company.name}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger"
                                            onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>)
                    :
                    <h2>Users not exist</h2>
                }
            </div>
        </>
    );
};

export default Users;