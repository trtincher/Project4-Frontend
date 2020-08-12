import React, { useState, createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Characters from './Components/Characters/Characters';
import CreateCharacter from './Components/CreateCharacter/CreateCharacter';
import Dashboard from './Components/Dashboard/Dashboard';

export const DataContext = createContext();

function App() {
	const [ activeUser, setActiveUser ] = useState([]);
	const [ activeCharacter, setActiveCharacter ] = useState([]);
	console.log('activeUser in App', activeUser);
	console.log('activeCharacter in App', activeCharacter);

	return (
		<div className="App">
			<Switch>
				<DataContext.Provider value={{ activeUser, setActiveUser, activeCharacter, setActiveCharacter }}>
					<Route path="/" exact component={Landing} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/characters" component={Characters} />
					<Route path="/createCharacter" component={CreateCharacter} />
					<Route path="/dashboard" component={Dashboard} />
				</DataContext.Provider>
			</Switch>
		</div>
	);
}

export default App;
