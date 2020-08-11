import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
			</Switch>
		</div>
	);
}

export default App;
