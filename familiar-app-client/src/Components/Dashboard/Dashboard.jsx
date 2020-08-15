import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { DataContext } from '../../App';
import styled, { css } from 'styled-components';

import DashHead from './DashHead/DashHead';
import DashBody from './DashBody/DashBody';
import DashFoot from './DashFoot/DashFoot';

const Container = styled.div``;

function Dashboard() {
	const { activeUser, setActiveUser } = useContext(DataContext);
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);
	const { modifiers, setModifiers } = useContext(DataContext);

	// console.log('ActiveCharacter in Dashboard', activeCharacter);
	console.log('setActiveCharacter in Dashboard', setActiveCharacter);

	useEffect(() => {
		setActiveCharacter({
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
				'Improvise',
				'Ready',
				'Search',
				'Shove',
				'Use and Object'
			],
			spellSlots: {
				1: 2
			},
			spells: [
				{
					_id: '5f31b3230b1bb138c5a62b38',
					index: 'fire-bolt',
					name: 'Fire Bolt',
					desc: [
						"You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
						"This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
					],
					range: '120 feet',
					components: [ 'V', 'S' ],
					ritual: false,
					duration: 'Instantaneous',
					concentration: false,
					casting_time: '1 action',
					level: 0,
					attack_type: 'ranged',
					damage: {
						damage_type: {
							name: 'Fire',
							url: '/api/damage-types/fire'
						},
						damage_at_character_level: {
							'1': '1d10',
							'5': '2d10',
							'11': '3d10',
							'17': '4d10'
						}
					},
					school: {
						name: 'Evocation',
						url: '/api/magic-schools/evocation'
					},
					classes: [
						{
							name: 'Sorcerer',
							url: '/api/classes/sorcerer'
						},
						{
							name: 'Wizard',
							url: '/api/classes/wizard'
						}
					],
					subclasses: [],
					url: '/api/spells/fire-bolt',
					prepared: true
				},
				{
					_id: '5f31b3230b1bb138c5a62bb4',
					index: 'ray-of-frost',
					name: 'Ray of Frost',
					desc: [
						'A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.',
						"The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
					],
					range: '60 feet',
					components: [ 'V', 'S' ],
					ritual: false,
					duration: 'Instantaneous',
					concentration: false,
					casting_time: '1 action',
					level: 0,
					attack_type: 'ranged',
					damage: {
						damage_type: {
							name: 'Cold',
							url: '/api/damage-types/cold'
						},
						damage_at_character_level: {
							'1': '1d8',
							'5': '2d8',
							'11': '3d8',
							'17': '4d8'
						}
					},
					school: {
						name: 'Evocation',
						url: '/api/magic-schools/evocation'
					},
					classes: [
						{
							name: 'Sorcerer',
							url: '/api/classes/sorcerer'
						},
						{
							name: 'Wizard',
							url: '/api/classes/wizard'
						}
					],
					subclasses: [
						{
							name: 'Lore',
							url: '/api/subclasses/lore'
						}
					],
					url: '/api/spells/ray-of-frost',
					prepared: true
				},
				{
					_id: '5f31b3230b1bb138c5a62ae6',
					index: 'burning-hands',
					name: 'Burning Hands',
					desc: [
						'As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.',
						"The fire ignites any flammable objects in the area that aren't being worn or carried."
					],
					higher_level: [
						'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.'
					],
					range: 'Self',
					components: [ 'V', 'S' ],
					ritual: false,
					duration: 'Instantaneous',
					concentration: false,
					casting_time: '1 action',
					level: 1,
					damage: {
						damage_type: {
							name: 'Fire',
							url: '/api/damage-types/fire'
						},
						damage_at_slot_level: {
							'1': '3d6',
							'2': '4d6',
							'3': '5d6',
							'4': '6d6',
							'5': '7d6',
							'6': '8d6',
							'7': '9d6',
							'8': '10d6',
							'9': '11d6'
						}
					},
					dc: {
						dc_type: {
							name: 'DEX',
							url: '/api/ability-scores/dex'
						},
						dc_success: 'half'
					},
					area_of_effect: {
						type: 'cone',
						size: 15
					},
					school: {
						name: 'Evocation',
						url: '/api/magic-schools/evocation'
					},
					classes: [
						{
							name: 'Sorcerer',
							url: '/api/classes/sorcerer'
						},
						{
							name: 'Wizard',
							url: '/api/classes/wizard'
						}
					],
					subclasses: [
						{
							name: 'Lore',
							url: '/api/subclasses/lore'
						},
						{
							name: 'Fiend',
							url: '/api/subclasses/fiend'
						}
					],
					url: '/api/spells/burning-hands',
					prepared: false
				}
			],
			nonSpellattacks: [],
			equipment: [
				{
					_id: '5f31b31e0b1bb138c5a62460',
					index: 'quarterstaff',
					name: 'Quarterstaff',
					equipment_category: {
						name: 'Weapon',
						url: '/api/equipment-categories/weapon'
					},
					weapon_category: 'Simple',
					weapon_range: 'Melee',
					category_range: 'Simple Melee',
					cost: {
						quantity: 2,
						unit: 'sp'
					},
					damage: {
						damage_dice: '1d6',
						damage_type: {
							url: '/api/damage-types/bludgeoning',
							name: 'Bludgeoning'
						}
					},
					range: {
						normal: 5,
						long: null
					},
					weight: 4,
					properties: [
						{
							url: '/api/weapon-properties/versatile',
							name: 'Versatile'
						},
						{
							url: '/api/weapon-properties/monk',
							name: 'Monk'
						}
					],
					'2h_damage': {
						damage_dice: '1d8',
						damage_type: {
							url: '/api/damage-types/bludgeoning',
							name: 'Bludgeoning'
						}
					},
					url: '/api/equipment/quarterstaff',
					equiped: true
				},
				{
					_id: '5f31b31e0b1bb138c5a6248d',
					index: 'alchemists-fire-flask',
					name: "Alchemist's fire (flask)",
					equipment_category: {
						name: 'Adventuring Gear',
						url: '/api/equipment-categories/adventuring-gear'
					},
					gear_category: 'Standard Gear',
					cost: {
						quantity: 50,
						unit: 'gp'
					},
					desc: [
						'This sticky, adhesive fluid ignites when exposed to air.',
						"As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon.",
						'On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.'
					],
					weight: 1,
					url: '/api/equipment/alchemists-fire-flask',
					equiped: true
				},
				{
					_id: '5f31b31e0b1bb138c5a62491',
					index: 'amulet',
					name: 'Amulet',
					equipment_category: {
						name: 'Adventuring Gear',
						url: '/api/equipment-categories/adventuring-gear'
					},
					gear_category: 'Holy Symbols',
					cost: {
						quantity: 5,
						unit: 'gp'
					},
					weight: 1,
					desc: [
						'A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.',
						'Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.'
					],
					url: '/api/equipment/amulet',
					equiped: true
				}
			],
			_id: '5f342594481c2752d229d730',
			name: 'Thomas the Wise',
			avatar: 'https://i.imgur.com/p7WqoA8.png',
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
		});
	}, []);

	return (
		<Container>
			<DashHead character={activeCharacter} />
			<DashBody character={activeCharacter} />
			<DashFoot character={activeCharacter} />
		</Container>
	);
}

export default Dashboard;
