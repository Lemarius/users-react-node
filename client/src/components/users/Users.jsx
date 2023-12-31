import { useEffect } from 'react';

const Users = ({ users, setUsers }) => {
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('http://localhost:3000/api/users');
				const data = await response.json();
				setUsers(data);
			} catch (err) {
				console.error('Error al obtener los usuarios');
			}
		};

		fetchUsers();
	}, []);

	return (
		<div>
			{users.map(user => (
				<div key={user.userId}>
					<h3>{user.title}</h3>
					<p>Nombre: {user.name}</p>
					<p>Edad: {user.age}</p>
					<p>Nombre de usuario: {user.username}</p>
					<p>Email: {user.email}</p>
				</div>
			))}
		</div>
	);
};

export default Users;
