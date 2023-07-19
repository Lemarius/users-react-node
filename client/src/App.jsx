import { useState } from 'react';
import Form from './components/form/Form';
import Users from './components/users/Users';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [users, setUsers] = useState([]);
	return (
		<>
			<GlobalStyles />
			<Form setUsers={setUsers} />
			<Users users={users} setUsers={setUsers} />
		</>
	);
};

export default App;
