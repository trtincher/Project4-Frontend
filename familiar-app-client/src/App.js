import React, { useState, createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

export const DataContext = createContext();

function App() {
	const [ activeUser, setActiveUser ] = useState([]);
	console.log('activeUser in App', activeUser);

	return (
		<div className="App">
			<Switch>
				<DataContext.Provider value={{ activeUser, setActiveUser }}>
					<Route path="/" exact component={Landing} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
				</DataContext.Provider>
			</Switch>
		</div>
	);
}

export default App;
