import React, { useState, useEffect } from 'react'
import UsersList from './components/UsersList'
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]),
        [value, setValue] = useState(''),
        [click, setClick] = useState(false),
        [response, setResponse] = useState(false),
        [loading, setLoading] = useState(true),
        [page, setPage] = useState(1),
        [empty, setEmpty] = useState(false);


    useEffect(() => {
        axios.get(`https://5c3755177820ff0014d92711.mockapi.io/users?page=${page}&limit=10`)
            .then(({ data }) => {
                setUsers(state => [...state, ...data]);
                setPage((state) => ++state);
                if (data.length === 0) {
                    setEmpty(true)
                }
            })
            .finally(() => {
                setResponse(false)
                setLoading(false);
            })
    }, [click])

    function buttonClick(e) {
        setClick(!click);
        setResponse(true);
        if (response) {
            e.preventDefault()
        }
    }

    return <div className="app">
        <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Поиск пользователя..." />
        <UsersList users={users} value={value} loading={loading} />
        {empty ? null : <button onClick={buttonClick}>{response ? 'Wait...' : 'Next 10 users'}</button>}
    </div>
}

export default App;
