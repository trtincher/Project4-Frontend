# Project Overview

## Title: Familar

## Project Description

FAmilar is a support app for the popular dungeons and dragons 5th edition role playing game. Often the most difficult part of playing dungeons and dragons for news and experienced players is keeping track of all the rules and stats for your characters. This app seeks to make that experience as easy and streamlined as possible so the player can have a fun and fully immersive role playing experience.

While other apps aim to achieve similar goals, most are tied to the original character sheet and dice role model. This app seeks to move to a card based system making the expereince feel as tangible as possible. When a player wants to perform an action the player simply selects the action card they wish to play and all the character stats and dice roles needed for the action will be made automatically. A move that traditionally takes minutes now takes seconds, and with no math or rule checking required! 


# Time/Priority Matrix
#### MVPs

##### General
- Fully functional Wizard Class
##### Backend 
- User, Character models with proper relations
    - User has_many characters
- Full CRUD routes for Users
- CRUD for Characters and Spells
- Seed Data with Character Presets and examples

##### Frontend
- React Architecture Setup
- Components
    - Landing
    - Sign UP
    - Login
    - About Page
    - Choose Character Page
    - Dashboard (displays action decks, basic charcter stats)
    - Character Details (shows greater details for background, bonds, etc...)
    - Character Leveling (Make leveling choices)
    - HP/Buff/Debuff Calculator (Add, Remove Damage, Select Buffs and Debuffs)
    - Footer (Paired down symbol-based stats bar)
    - Nav (Links to pages)
    - DeckCards (dispalys cards in deck)
    - Card (displays chosen Card in deck with details and action discription)
    - Hand

#### PostMVPs 
- 3rd Party Verification
- Add Classes
- Add Character Creation
- Add random monster generator that allows for practice battels
- Card Animations
- Allow Homebrew Customization
- Allow Personalized Avatar for Character
- Card Theme options



#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
MVP|||||Post MVP|||
Component|Priority|Estimated Time|Actual Time||Component|Priority|Estimated Time|Actual Time
Planning|H|10|11||3rd Party verification|H|3|0
User/Character models|H|5|2||Add Classes|M|3|0
Full CRUD routes for Users|H|5|2||Character Creation|M|3|0
RUD for Characters/Spells/Actions|H|5|2||Random monster generator|L|3|0
React Architecture Setup|H|3|1||Card Theme options|L|3|0
Landing|H|2|2|||||
Sign up|H|5|1||Total|15|0|
Seed Data with Character Presets|H|1|2|||||
Login|H|2|1|||||
Choose Character|H|3|1|||||
EditUser|M|2|2|||||
EditCharacter|M|2|4|||||
DeleteUser|M|2|2|||||
CreateCharacter|M|1|1|||||
DeleteCharacter|M|1|0.25|||||
Health|H|3|0.5|||||
BuffDebuffs|M|2|1|||||
Header|H|2|5|||||
Footer|H|2|6|||||
Deck|H|3|9|||||
Card|H|3|1|||||
Hand|H|4|1|||||
Deployment|H|2|3|||||
General Styling|M|2|3|||||
Dashboard Functionality|H|5|10|||||
||||||||
Planning||10|11|||||
Frontend||51|54.75|||||
Backend||16|8|||||
Total||77|73.75|||||	



#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
3rd Party verification|	H|	3|
Add Classes|M|	3|
Character Creation|	M|	3|
Random monster generator|	L|	3|
Card Theme options|	L|	3|

| Totals | Estimated Time | Actual Time |
| :---: |  :---: | :---: |
| Total | 15 | -hrs |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.
| Day | Deliverable | Status
|---|---| ---|
|Day 0 - Sun|Project Planning|Complete
|Day 1 - Tues|Project Proposal|Complete
|Day 1 - Tues|User/Character Models|Complete
|Day 1 - Tues|Full CRUD routes for Users|Complete
|Day 1 - Tues|Full CRUD for Characters/Spells/Actions|Complete
|Day 1- Tues|Seed Character Data|Complete
|Day 1 - Tues|React Architecture Setup|Complete
|Day 1 - Tues|Backend(BE) Deployment|Complete
|Day 1 - Tues|Frontend(FE) Deployment|Complete
|Day 2- Wed|CharacterForm|Incomplete
|Day 2- Wed|Choose Character|Complete
|Day 2- Wed|Character Dashboard|Complete
|Day 2- Wed|Card|Complete
|Day 2- Wed|Deck|Complete
|Day 2- Wed|Hand|Complete
|Day 3- Thurs|Header|Complete
|Day 3 - Thurs|Footer|Complete
|Day 3 - Thurs|SignUp Funct|Complete
|Day 3 - Thurs|SignUp Style|Complete
|Day 3 - Thurs|Login Funct|Complete
|Day 3 - Thurs|Login Style|Complete
|Day 4 - Fri|HealthCalc Style|Complete
|Day 4 - Fri|HealthCalc Funct|Complete
|Day 4 - Fri|BuffDebuffs|Complete
|Stretch Goal|About Page|Incomplete
|Day 4 - Fri|Character Leveling|Incomplete
|Day 5 - Mon|Finish Styling|...In Progress
|Day 5 - Mon|3rd Party Password Verfication|Incomplete
|Day 6 - Tues| Card Theme options| Incomplete
|Day 7 - Wed|Presentation|Incomplete

## User Stories
- Users want to create accounts, so they can access the app. 
- Users want to be able to update their account information in case anything changes. 
- Users want to be able to delete their account to keep their information private if they no longer wish to use the app.
- User wants to choose Character
- User wants to access card decks according to desired actions
- User wants to update hands with prepared actions and spells
- User wants to use prepared actions and spells
- User wants to see resource updates as result of actions and spells
- Users want to have passwords to their accounts to feel secure. 

## Languages and Libraries

React, React-Router, JS, Style Components, Ruby on Rails, SQL

## Deployment Links
- [Frontend]()
- [Backend]()

## Project Board Links
- [WireFrames](https://i.imgur.com/ssI46LC.jpg)
- [React Framework](https://i.imgur.com/WaHCZGF.jpg)
- [Backend Framework](https://i.imgur.com/NQnt1jt.jpg)
- [GitHub Workflow](https://res.cloudinary.com/dugmhtotn/image/upload/v1595609346/GitHub-Workflow_k3x8sn.jpg)

## Models
- [Mobile](https://i.imgur.com/ssI46LC.jpg)

### User

- username (String) (required)
- email (String)
- password (String) (required)


### Character

- name (String) (required)
- gender (string) (required)
- race
- class
- level
- base_stats
- saving_throws
- hp
- movement
- armor_class
- initiative
- conditions
- defenses
- languages
- actions
- spells
- equipment
- features_traits
- prof_bonus
- save_proficiency
- armor_prof
- weapons_prof
- tools_prof
- skill_profs

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.


