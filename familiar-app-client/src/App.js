import React, { useState, createContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import EditUser from './Components/EditUser/EditUser';
import Characters from './Components/Characters/Characters';
import CreateCharacter from './Components/CreateCharacter/CreateCharacter';
import Dashboard from './Components/Dashboard/Dashboard';
import Nav from './Components/Nav/Nav';

export const DataContext = createContext();

function App() {
	const [ activeUser, setActiveUser ] = useState([]);
	const [ activeCharacter, setActiveCharacter ] = useState({});
	const [ modifiers, setModifiers ] = useState({});
	// console.log('activeUser in App', activeUser);
	// console.log('activeCharacter in App', activeCharacter);
	// console.log('modifiers in App', modifiers);

	const mods = () => {
		const modCalc = {
			1: -5,
			2: -4,
			3: -4,
			4: -3,
			5: -3,
			6: -2,
			7: -2,
			8: -1,
			9: -1,
			10: 0,
			11: 0,
			12: 1,
			13: 1,
			14: 2,
			15: 2,
			16: 3,
			17: 3,
			18: 4,
			19: 4,
			20: 5,
			21: 5,
			22: 6,
			23: 6,
			24: 7,
			25: 7,
			26: 8,
			27: 8,
			28: 9,
			29: 9,
			30: 10
		};
		const modObj = {};
		for (const mod in activeCharacter.baseStats) {
			console.log(`${mod}:${modCalc[activeCharacter.baseStats[mod]]}`);
			let field = mod;
			let value = modCalc[activeCharacter.baseStats[mod]];
			modObj[field] = value;
		}
		return modObj;
	};

	useEffect(
		() => {
			const newMods = mods();
			setModifiers(newMods);
		},
		[ activeCharacter ]
	);

	return (
		<div className="App">
			<Switch>
				<DataContext.Provider
					value={{ activeUser, setActiveUser, activeCharacter, setActiveCharacter, modifiers, setModifiers }}
				>
					<Nav />
					<Route path="/" exact component={Landing} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/editUser" component={EditUser} />
					<Route path="/characters" component={Characters} />
					<Route path="/createCharacter" component={CreateCharacter} />
					<Route path="/dashboard" component={Dashboard} />
				</DataContext.Provider>
			</Switch>
		</div>
	);
}

export default App;
