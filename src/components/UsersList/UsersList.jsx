const UsersList = ({ users }) => {
    const elements = users.map(({avatarUrl,name,username,email,address:{street,city}, id}) => {
        return <li key={id}>
            <img src={avatarUrl} alt={name} />
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Address: {street},{city}</p>
        </li>
    })
    return <ul>
        {elements}
    </ul>
};

export default UsersList;