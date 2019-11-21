import React from 'react';
import ux from '../Assets/ui.svg';
import ui from '../Assets/uiprog.svg';
import prog from '../Assets/programming.svg';
import agile from '../Assets/agile.svg';

export default [
    {
        icon:ui,
        header:"UI Development",
        shortDesc:"Worked on multiple projects with Angular. Knowledge spectrum includes ReactJS, HTML, CSS, Typescript.",
        largeDesc:<div>
                    <p className="expDesc">Angular development with extensive knowledge on:</p>
                    <p className="expDesc point">1. Ag-grid with multi-level children and dynamic custom styling.</p>
                    <p className="expDesc point">2. Observer-Subscription based state store.</p>
                    <p className="expDesc point">3. Dynamic design for responsivenes of apps.</p> 
                    <p className="expDesc">Hands-on knowledge of ReactJS based web-development and CSS based animations.</p>
                </div>
    },
    {
        icon:prog,
        header:"Java Spring-boot",
        shortDesc:"Spring-boot based service design for web-apps. Integration with DB via JPA/MyBatis.",
        largeDesc:<div>
                    <p className="expDesc">Java based Spring-boot services built to support web-apps following the MVC pattern.</p>
                    <p className="expDesc">Interaction with MySQL, PostgreSQL Databases using:</p>
                    <p className="expDesc point">1. Java Persistence API.</p>
                    <p className="expDesc point">2. MyBatis - Hands-on with both XML and Annotation based querying.</p>
                    <p className="expDesc">Implementation of best practices and functional programming.</p>
                </div>
    },
    {
        icon:agile,
        header:"Agile Workflow",
        shortDesc:"Working in an Agile team with 2-week sprint cycles delivering at nearly constant velocities.",
        largeDesc:<div>
                    <p className="expDesc">Hands-on knowledge of Agile workflow. Lead Developer in an Agile team following the best practices of agile:</p>
                    <p className="expDesc point">1. Daily Stand-up, Planning, Backlog Gromming, Demo and Retrospection.</p>
                    <p className="expDesc point">2. Delivering Constant velocity of story points covered in respective sprints.</p>
                    <p className="expDesc">I have received internal training at my firm for Agile and its integral components.</p>
                </div>
    },
    {
        icon:ux,
        header:"Design/UX",
        shortDesc:"Design concepts for web-apps. Graphic designing with Adobe photoshop",
        largeDesc:<div>
                    <p className="expDesc">1. Moderate knowledge of Graphic designing and editing with Adobe Photoshop. Designed posters for events during college fests.</p>
                    <p className="expDesc">2. Conceptualized the designs for all personal projects to provide satisfactory user experience and culturally relevants solutions.</p>
                </div>
    }
]