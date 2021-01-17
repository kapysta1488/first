export default function UsersList({ users, value, loading }) {
    const list = users.filter(obj => obj.name.toLowerCase().includes(value.toLowerCase()))

    return <ul className="users">
        {loading ? 'Loading...' : list.map(users => <li key={users.email} className="users__item">
            <div className="users__item-name">{users.name}</div>
            <div className="users__item-email">{users.email}</div>
        </li>)}
    </ul>
}