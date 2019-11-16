
import React from 'react';
import Skills from './Skills/skills';
import Projects from'./Projects/projects';
import Experience from './Experience/experience'

export default [
	{
		title: 'One Stop Music',
		component: <Skills/>,
		bgColor:"#005ba9",
	},
	{
		title: 'Skills',
		component: <Skills/>,
		bgColor:"#f4b93d",
	},
	{
		title: 'Projects',
		component: <Projects/>,
		bgColor:"#eabad8",
	},
	{
		title: 'Experience',
		component: <Experience/>,
		bgColor:"#e53935",
	},
	
];