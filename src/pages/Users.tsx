import React, { FC, useEffect, useState } from 'react';
import UserCards from '../components/Users/UserCards';
import { useSearch } from '../hooks/useSearh';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelectors';


const Users: FC = () => {
  const { users } = useTypedSelector(state => state.users);
  const [search, setSearch] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);
  const { getUsers } = useAction();

  useEffect(() => {
    getUsers();
  }, []);

  const searchedUsers = useSearch(users, 'name', search);

  return (
    <>
      {/*<h1>Take out in other component</h1>*/}
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

      <button className="btn btn-success mt-3 mb-3"
              onClick={() => setShowUserForm(!showUserForm)}
      >
        Add new User
      </button>
      { /* {showUserForm && <UserAddForm setUsers={setUsers} users={users}/>} */}

      <UserCards/>
    </>
  );
};

export default Users;