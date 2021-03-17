
import React, { useEffect, useState } from 'react';
import { UserService } from '../services/user.service';
import './Search.scss';
import SearchResult from './SearchResult/SearchResult';


function Search() {

    const [query,setQuery] = useState('');
    const [users,setUsers] = useState([]);

    useEffect(() => {
       if (!query) {
           return;
       }
       async function getUsers() {
        try {
            setUsers(await UserService.search(query));
        } catch(err) {
            console.log(err);
        }
    }
       getUsers();
    }, [query]);

    
    function hasNoResults () {
        return users.length === 0 && query.length > 0;
    }


    return (
        <div className="search">
            <h1 className="search-header">Search</h1>
            <input value={query}  onChange={(e) => setQuery(e.target.value)} />
            <div>
                {users.map(user => {
                    return <SearchResult key={user._id} user={user}/>
                })}
            </div>
            { hasNoResults() && 'sorry, no user'}
        </div>
    );
}
export default Search;