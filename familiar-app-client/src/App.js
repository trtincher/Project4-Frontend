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
	const [ activeUser, setActiveUser ] = useState([
		{
			characters: [
				{
					saving_throws: [ 'str', 'dex', 'con', 'int', 'wis', 'cha' ],
					defenses: [ {} ],
					languages: [ 'Common', 'Elvish', 'Riedran', 'Sylvan' ],
					actions: [
						'Attack',
						'Cast a Spell',
						'Disengage',
						'Dodge',
						'Grapple',
						'Help',
						'Hide',
						'Imporovise',
						'Ready',
						'Search',
						'Shove',
						'Use and Object'
					],
					spells: [
						{
							spell_name: 'Spell',
							spell_discription: 'description here',
							prepared: true
						},
						{
							spell_name: 'Spell',
							spell_discription: 'description here',
							prepared: true
						},
						{
							spell_name: 'Spell',
							spell_discription: 'description here',
							prepared: true
						}
					],
					equipment: [
						{
							item_name: 'item',
							discription: 'item_description',
							equiped: true
						},
						{
							item_name: 'item',
							discription: 'item_description',
							equiped: true
						},
						{
							item_name: 'item',
							discription: 'item_description',
							equiped: true
						}
					],
					_id: '5f340292f3008d3b9a9b917f',
					name: 'Jeff the Intellegent',
					gender: 'Male',
					race: 'Human',
					class: 'Wizard',
					level: 1,
					baseStats: {
						strength: 8,
						dexterity: 13,
						constitution: 15,
						intelligence: 16,
						wisdom: 10,
						charisma: 14
					},
					hp: {
						current: 8,
						max: 8,
						temp: 0
					},
					movement: 30,
					armorClass: 11,
					conditions: {
						blinded: false,
						charmed: false,
						deafened: false,
						frightened: false,
						grappled: false,
						incapacitated: false,
						invisible: false,
						paralyzed: false,
						petrified: false,
						poisoned: false,
						prone: false,
						restrained: false,
						stunned: false,
						unconcious: false,
						exhaustion: 0
					},
					featuresTraits: {
						wizard_features: {
							catigory: 'discriptions'
						},
						racialTraits: {
							catigory: 'discriptions'
						},
						feats: {
							catigory: 'discriptions'
						}
					},
					description: {
						catigory: {
							'sub-catigory': 'discriptions'
						}
					},
					proficiencies: {
						save_prof: [ 'int', 'wis' ],
						armor_prof: [],
						weapon_prof: [ 'crossbow', 'dagger', 'dart', 'quarterstaff', 'sling' ],
						tool_prof: [],
						skill_prof: [ 'acrobatics', 'arcana', 'history', 'insight', 'investigation' ]
					},
					__v: 0
				},
				{
					saving_throws: [ 'str', 'dex', 'con', 'int', 'wis', 'cha' ],
					defenses: [ {} ],
					languages: [ 'Common', 'Elvish', 'Riedran', 'Sylvan' ],
					actions: [
						'Attack',
						'Cast a Spell',
						'Disengage',
						'Dodge',
						'Grapple',
						'Help',
						'Hide',
						'Imporovise',
						'Ready',
						'Search',
						'Shove',
						'Use and Object'
					],
					spells: [
						{
							spell_name: 'Spell',
							spell_discription: 'description here',
							prepared: true
						},
						{
							spell_name: 'Spell',
							spell_discription: 'description here',
							prepared: true
						},
						{
							spell_name: 'Spell',
							spell_discription: 'description here',
							prepared: true
						}
					],
					equipment: [
						{
							item_name: 'item',
							discription: 'item_description',
							equiped: true
						},
						{
							item_name: 'item',
							discription: 'item_description',
							equiped: true
						},
						{
							item_name: 'item',
							discription: 'item_description',
							equiped: true
						}
					],
					_id: '5f340292f3008d3b9a9b917e',
					name: 'Thomas the Wise',
					gender: 'Male',
					race: 'Half-Elf',
					class: 'Wizard',
					level: 1,
					baseStats: {
						strength: 8,
						dexterity: 13,
						constitution: 15,
						intelligence: 16,
						wisdom: 10,
						charisma: 14
					},
					hp: {
						current: 8,
						max: 8,
						temp: 0
					},
					movement: 30,
					armorClass: 11,
					conditions: {
						blinded: false,
						charmed: false,
						deafened: false,
						frightened: false,
						grappled: false,
						incapacitated: false,
						invisible: false,
						paralyzed: false,
						petrified: false,
						poisoned: false,
						prone: false,
						restrained: false,
						stunned: false,
						unconcious: false,
						exhaustion: 0
					},
					featuresTraits: {
						wizard_features: {
							catigory: 'discriptions'
						},
						racialTraits: {
							catigory: 'discriptions'
						},
						feats: {
							catigory: 'discriptions'
						}
					},
					description: {
						catigory: {
							'sub-catigory': 'discriptions'
						}
					},
					proficiencies: {
						save_prof: [ 'int', 'wis' ],
						armor_prof: [],
						weapon_prof: [ 'crossbow', 'dagger', 'dart', 'quarterstaff', 'sling' ],
						tool_prof: [],
						skill_prof: [ 'acrobatics', 'arcana', 'history', 'insight', 'investigation' ]
					},
					__v: 0
				},
				{
					saving_throws: [ 'str', 'dex', 'con', 'int', 'wis', 'cha' ],
					defenses: [ {} ],
					languages: [ 'Common', 'Elvish', 'Riedran', 'Sylvan' ],
					actions: [
						'Attack',
						'Cast a Spell',
						'Disengage',
						'Dodge',
						'Grapple',
						'Help',
						'Hide',
						'Imporovise',
						'Ready',
						'Search',
						'Shove',
						'Use and Object'
					],
					spells: [
						{
							spell_name: 'Spell',
							spell_discription: 'description here',
							prepared: true
						},
						{
							spell_name: 'Spell',
							spell_discription: 'description here',
							prepared: true
						},
						{
							spell_name: 'Spell',
							spell_discription: 'description here',
							prepared: true
						}
					],
					equipment: [
						{
							item_name: 'item',
							discription: 'item_description',
							equiped: true
						},
						{
							item_name: 'item',
							discription: 'item_description',
							equiped: true
						},
						{
							item_name: 'item',
							discription: 'item_description',
							equiped: true
						}
					],
					_id: '5f340292f3008d3b9a9b9180',
					name: 'Lynda the Excellent',
					gender: 'Female',
					race: 'High Elf',
					class: 'Wizard',
					level: 1,
					baseStats: {
						strength: 8,
						dexterity: 13,
						constitution: 15,
						intelligence: 16,
						wisdom: 10,
						charisma: 14
					},
					hp: {
						current: 8,
						max: 8,
						temp: 0
					},
					movement: 30,
					armorClass: 11,
					conditions: {
						blinded: false,
						charmed: false,
						deafened: false,
						frightened: false,
						grappled: false,
						incapacitated: false,
						invisible: false,
						paralyzed: false,
						petrified: false,
						poisoned: false,
						prone: false,
						restrained: false,
						stunned: false,
						unconcious: false,
						exhaustion: 0
					},
					featuresTraits: {
						wizard_features: {
							catigory: 'discriptions'
						},
						racialTraits: {
							catigory: 'discriptions'
						},
						feats: {
							catigory: 'discriptions'
						}
					},
					description: {
						catigory: {
							'sub-catigory': 'discriptions'
						}
					},
					proficiencies: {
						save_prof: [ 'int', 'wis' ],
						armor_prof: [],
						weapon_prof: [ 'crossbow', 'dagger', 'dart', 'quarterstaff', 'sling' ],
						tool_prof: [],
						skill_prof: [ 'acrobatics', 'arcana', 'history', 'insight', 'investigation' ]
					},
					__v: 0
				}
			],
			_id: '5f340292f3008d3b9a9b917d',
			name: 'trtincher',
			email: 'trtincher12@gmail.com',
			password: 'D&Discool100!',
			__v: 0
		}
	]);
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
