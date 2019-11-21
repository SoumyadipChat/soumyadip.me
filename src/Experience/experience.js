import React from 'react';
import {useState} from 'react';
import './experience.css';
import expComps from './expComps'

function Experience() {

  const[expandRole,setExpandRole]=useState({});
  const[isExpanded,setIsExpanded]=useState(false);

  var onExpand=(index)=>{
      setIsExpanded(true);
      setExpandRole(expComps[index]);
  }

  var onCollapse=()=>{
    setIsExpanded(false);
    setExpandRole({});
  }

  return (
    <div className="exp">
      <div className="expHeader">
        Experience & Projects
      </div>
      {!isExpanded && <div className="expSmall">
        {expComps.map((comp,index)=>{
            return (
              <div className="cpmanyCard">
                <div className="companyName">
                {comp.name}
                </div>
                {comp.roles.map((role,index)=>{
                  return (
                    <div className="role">
                      <i class="fas fa-circle bulletIcon"></i>
                      <div className="rolename">{role.name}<c className="roleDate">{role.time}</c></div>
                    </div>
                  )
                })
                }
                <img className="devIcon" src={comp.icon} alt="developer"/>
                <div role="button" onClick={(e) => onExpand(index, e)} className="projButton">
                  Projects
                </div>
              </div>
            )
          })
        }
      </div>}
      {isExpanded && <div className="expanded">
        <div className="projectsDesc">
            {expandRole.projects}
        </div>
        <div role="button" onClick={onCollapse} className="projButton">
            Back
        </div>
      </div>

      }
    </div>
  );
}

export default Experience;