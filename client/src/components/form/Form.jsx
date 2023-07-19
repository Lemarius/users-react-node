const Form = ({ setUsers }) => {
	return (
		<form id='form' onSubmit={e => handleSubmit(e, setUsers)}>
			<label htmlFor='title'>Título:</label>
			<input type='text' name='title' />
			<br />

			<label htmlFor='name'>Name:</label>
			<input type='text' name='name' />
			<br />

			<label htmlFor='age'>Edad:</label>
			<input type='text' name='age' />
			<br />

			<label htmlFor='username'>Nombre de usuario:</label>
			<input type='text' name='username' />
			<br />

			<label htmlFor='email'>Correo electrónico:</label>
			<input type='email' name='email' />
			<br />

			<label htmlFor='active'>Activo:</label>
			<input type='checkbox' name='active' />
			<br />

			<input type='submit' value='Crear'></input>
		</form>
	);
};

const handleSubmit = async (event, setUsers) => {
	event.preventDefault();
	const response = await fetch('http://localhost:3000/api/users/writeUser', {
		method: 'POST',
		body: JSON.stringify({
			title: event.target.title.value,
			name: event.target.name.value,
			age: event.target.age.value,
			username: event.target.username.value,
			email: event.target.email.value
		}),
		headers: {
			Accept: '*/*',
			'Content-Type': 'application/json'
		}
	});
	const data = await response.json();
	setUsers(data);
};

export default Form;
