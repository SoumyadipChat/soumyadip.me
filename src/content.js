
import React from 'react';
import Skills from './Skills/skills';
import Projects from'./Projects/projects';
import Experience from './Experience/experience'
import OSM from './OSM/osm'

export default [
	{
		title: 'One Stop Music',
		component: <OSM/>,
		bgColor:"#005ba9",
	},
	{
		title: 'Skills',
		component: <Skills/>,
		bgColor:"#f4b93d",
	},
	{
		title: 'Experience',
		component: <Experience/>,
		bgColor:"#c392cc",
	},
	{
		title: 'Projects',
		component: <Projects/>,
		bgColor:"#eabad8",
	},
	
	
	
];