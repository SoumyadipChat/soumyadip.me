import React from 'react';
import {useState} from 'react';
import './skills.css';
import skillMatrix from './skillMatrix'


function Skills() {

  const[expandSkill,setExpandSkill]=useState({});
  const[isExpanded,setIsExpanded]=useState(false);

  var onExpand=(index)=>{
      setIsExpanded(true);
      setExpandSkill(skillMatrix[index]);
  }

  var onCollapse=()=>{
    setIsExpanded(false);
    setExpandSkill({});
  }

  return (
    <div className="skills">
      <div className="skillsHeader">
        My Skills
      </div>    
      {!isExpanded && <div className="congestedSkills">
          {skillMatrix.map((skills,index) => {
              return (
                <div className="skillIndv">
                    <img className="skillIc" src={skills.icon} alt="logo" />
                   <div className="skillHeader">
                    {skills.header} 
                   </div>
                   <div className="skillDesc">
                   {skills.shortDesc}
                   </div> 
                   <div role="button" onClick={(e) => onExpand(index, e)} className="expandSkill">
                     Expand
                   </div>
                </div>
              )
          })}
      </div>}
      {isExpanded && <div className="expandedSkill">
          <div className="expandedHeader">
              <img className="skillIcEx" src={expandSkill.icon} alt="logo" />
              <div className="skillHederEx">{expandSkill.header}</div>
          </div>
          <div className="skillLongDesc">
            {expandSkill.largeDesc}
          </div>
          <div role="button" onClick={onCollapse} className="expandSkill collapse">
              Collapse
          </div>
      </div>}
    </div>
  );
}

export default Skills;